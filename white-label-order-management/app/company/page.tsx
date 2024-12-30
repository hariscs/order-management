"use client";

import React from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { DataTable } from "@/components/data-table";
import { Orders } from "./columns";
import { getOrdersByCompany } from "@/utils";

export default function CompanyPage() {
  const searchParams = useSearchParams();
  const subdomain = searchParams.get("subdomain") || "default";
  const ordersData = getOrdersByCompany(subdomain);

  return (
    <>
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
    </>
  );
}
