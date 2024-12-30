"use client";

import { Order } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const Orders: ColumnDef<Order>[] = [
  {
    accessorKey: "orderId",
    header: () => <div className="text-right">Order ID</div>,
    cell: ({ row }) => {
      const orderId = row.getValue("orderId") as string;
      return <div className="text-right font-medium">{orderId}</div>;
    },
  },
  {
    accessorKey: "customerName",
    header: () => <div className="text-right">Customer Name</div>,
    cell: ({ row }) => {
      const customerName = row.getValue("customerName") as string;
      return <div className="text-right font-medium">{customerName}</div>;
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = row.getValue("amount") as string;

      return <div className="text-right font-medium">{amount}</div>;
    },
  },
  {
    accessorKey: "status",
    header: () => <div className="text-right">Status</div>,
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      return <div className="text-right font-medium">{status}</div>;
    },
  },
];
