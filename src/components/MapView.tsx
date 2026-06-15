"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { type Building } from "@/lib/data/buildings";
import { type Locale } from "@/lib/i18n/config";

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface MapViewProps {
  buildings: Building[];
  locale: Locale;
  selectedBuildingId: number | null;
  onBuildingSelect: (buildingId: number) => void;
}

export default function MapView({
  buildings,
  locale,
  selectedBuildingId,
  onBuildingSelect,
}: MapViewProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<Map<number, L.Marker>>(new Map());

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const map = L.map(mapRef.current, {
      center: [36.5, 137.5],
      zoom: 6,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 18,
    }).addTo(map);

    mapInstanceRef.current = map;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;

    markersRef.current.forEach((marker) => map.removeLayer(marker));
    markersRef.current.clear();

    buildings.forEach((building) => {
      const marker = L.marker([building.lat, building.lng]).addTo(map);
      const title = locale === "ja" ? building.title : building.titleEn;
      const location = locale === "ja" ? building.location : building.locationEn;
      const detailsLabel = locale === "ja" ? "詳細を見る" : "View Details";

      const popupContent = `
        <div style="font-family: system-ui, sans-serif; min-width: 200px;">
          <div style="margin-bottom: 4px;">
            <span style="font-size: 11px; color: #6b7280;">${building.year} | ${location}</span>
          </div>
          <h3 style="font-size: 13px; font-weight: 600; color: #111827; margin: 0 0 6px 0;">${title}</h3>
          <a href="/${locale}/buildings/${building.id}" style="font-size: 11px; color: #2563eb; text-decoration: none; font-weight: 500;">${detailsLabel} →</a>
        </div>
      `;

      marker.bindPopup(L.popup({ maxWidth: 280 }).setContent(popupContent));
      marker.on("click", () => onBuildingSelect(building.id));
      markersRef.current.set(building.id, marker);
    });

    if (buildings.length > 0) {
      const bounds = L.latLngBounds(buildings.map((b) => [b.lat, b.lng] as L.LatLngTuple));
      map.fitBounds(bounds, { padding: [50, 50], maxZoom: 12 });
    }
  }, [buildings, locale, onBuildingSelect]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || selectedBuildingId === null) return;

    const marker = markersRef.current.get(selectedBuildingId);
    if (marker) {
      map.flyTo(marker.getLatLng(), Math.max(map.getZoom(), 10), { duration: 0.8 });
      marker.openPopup();
    }
  }, [selectedBuildingId]);

  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map) return;
    const timer = setTimeout(() => map.invalidateSize(), 100);
    return () => clearTimeout(timer);
  }, [buildings]);

  return (
    <div
      ref={mapRef}
      className="w-full h-full min-h-[500px] rounded-xl z-0"
      style={{ background: "var(--color-muted)" }}
    />
  );
}
