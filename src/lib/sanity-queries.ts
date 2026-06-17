import { client } from "./sanity";

export async function getBuildings() {
  return client.fetch('*[_type == "building"] | order(year desc)');
}

export async function getBuildingBySlug(slug: string) {
  return client.fetch(`*[_type == "building" && title == $slug][0]`, { slug });
}

export async function getBuildingById(id: number) {
  return client.fetch(`*[_type == "building"][0...50]`);
}

export async function getResearchLogs() {
  return client.fetch('*[_type == "researchLog"] | order(date desc)');
}

export async function getLatestResearchLogs(limit = 4) {
  return client.fetch(`*[_type == "researchLog"] | order(date desc)[0...${limit}]`);
}

export async function getStaff() {
  return client.fetch('*[_type == "staff"] | order(order asc)');
}

export async function getSiteContent() {
  return client.fetch('*[_type == "siteContent"][0]');
}

export async function getProject() {
  return client.fetch('*[_type == "project"][0]');
}
