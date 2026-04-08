const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
export async function getStrapiData(url: string) {
  try {
    const res = await fetch(`${BASE_URL}${url}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch data from Strapi: ${res.statusText}`);
    }
    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
