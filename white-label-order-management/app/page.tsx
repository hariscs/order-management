import { DataTable } from "@/components/data-table";
import fs from "fs";
import Image from "next/image";
import path from "path";
import { Orders } from "./company/columns";
import { getOrdersByCompany } from "@/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: { subdomain: string };
}) {
  const subdomain = searchParams.subdomain;

  // Read companies configuration
  const filePath = path.resolve("./config/companies.json");
  const companies = JSON.parse(fs.readFileSync(filePath, "utf8"));

  // Fetch data based on subdomain
  const companyName = companies[subdomain]?.name || "Default Company";
  const ordersData = getOrdersByCompany(subdomain);

  return (
    <div>
      <h2>Welcome to {companyName}'s order management</h2>
      <header>
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </header>

      <main>
        <h1>
          {subdomain.charAt(0).toUpperCase() + subdomain.slice(1)}'s Orders
        </h1>
        <div className="container mx-auto py-10">
          <DataTable columns={Orders} data={ordersData} />
        </div>
      </main>
    </div>
  );
}
