import { getStrapiData } from "@/lib/strapi";

export default async function Home() {
  const strapiData = await getStrapiData("/api/home-page"); // Replace with your actual endpoint
  const { title, description } = strapiData.data || {};
  console.log(strapiData); // Debugging log
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">{title || "Loading..."}</h1>
      <p className="mt-4 text-lg">
        {description || "Please wait while we fetch the new data."}
      </p>
      <hr />
      <hr />
    </main>
  );
}
