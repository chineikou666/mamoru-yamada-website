import { client } from "./sanity";

export async function getBuildings() {
  return client.fetch('*[_type == "building"] | order(year desc)');
}

export async function getResearchLogs() {
  return client.fetch('*[_type == "researchLog"] | order(date desc)');
}

export async function getLatestResearchLogs(limit = 4) {
  return client.fetch(`*[_type == "researchLog"] | order(date desc)[0...${limit}]`);
}
