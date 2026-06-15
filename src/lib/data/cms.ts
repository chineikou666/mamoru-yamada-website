import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface BuildingData {
  slug: string;
  locale: string;
  title: string;
  description: string;
  year: number;
  location: string;
  region: string;
  lat: number;
  lng: number;
  images?: Array<{
    image: string;
    caption?: string;
    alt?: string;
  }>;
  content: string;
  metadata?: {
    ogImage?: string;
    ogDescription?: string;
  };
  date: string;
}

export interface ResearchLogData {
  slug: string;
  locale: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  relatedBuildings?: Array<{
    buildingId: string;
  }>;
  featuredImage?: string;
  tags?: Array<{ tag: string }>;
  metadata?: {
    ogImage?: string;
    ogDescription?: string;
  };
  date: string;
}

export interface AboutData {
  locale: string;
  title: string;
  bio: string;
  career?: Array<{
    year: string;
    description: string;
  }>;
  awards?: Array<{
    year: string;
    name: string;
    for?: string;
  }>;
  profileImage?: string;
  contact?: {
    email?: string;
    phone?: string;
    socialLinks?: Array<{
      platform: string;
      url: string;
    }>;
  };
  metadata?: {
    ogImage?: string;
    ogDescription?: string;
  };
}

const contentDirectory = path.join(process.cwd(), "content");

export function getFilesInDirectory(dirPath: string): string[] {
  const fullPath = path.join(contentDirectory, dirPath);
  
  if (!fs.existsSync(fullPath)) {
    return [];
  }
  
  return fs.readdirSync(fullPath)
    .filter((file) => file.endsWith(".yml") || file.endsWith(".yaml"))
    .map((file) => file.replace(/\.yml$|\.yaml$/, ""));
}

export function readContentFile<T>(
  dirPath: string,
  filename: string
): T | null {
  const fullPath = path.join(contentDirectory, dirPath, `${filename}.yml`);
  
  if (!fs.existsSync(fullPath)) {
    const yamlPath = path.join(contentDirectory, dirPath, `${filename}.yaml`);
    if (!fs.existsSync(yamlPath)) {
      return null;
    }
    const fileContent = fs.readFileSync(yamlPath, "utf8");
    const { data } = matter(fileContent);
    return data as T;
  }
  
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContent);
  return data as T;
}

// Buildings
export function getAllBuildings(locale: string): BuildingData[] {
  const files = getFilesInDirectory("buildings");
  
  return files
    .map((file) => readContentFile<BuildingData>("buildings", file))
    .filter((building): building is BuildingData => 
      building !== null && building.locale === locale
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBuildingBySlug(
  slug: string,
  locale: string
): BuildingData | null {
  return readContentFile<BuildingData>("buildings", `${slug}-${locale}`);
}

// Research Logs
export function getAllResearchLogs(locale: string): ResearchLogData[] {
  const files = getFilesInDirectory("research-logs");
  
  return files
    .map((file) => readContentFile<ResearchLogData>("research-logs", file))
    .filter((log): log is ResearchLogData => 
      log !== null && log.locale === locale
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getResearchLogBySlug(
  slug: string,
  locale: string
): ResearchLogData | null {
  return readContentFile<ResearchLogData>("research-logs", `${slug}-${locale}`);
}

// About
export function getAbout(locale: string): AboutData | null {
  return readContentFile<AboutData>("about", `about-${locale}`);
}
