"use client"

import { Badge } from "@/components/ui/badge"
import { ColumnDef } from "@tanstack/react-table"
import { Payment } from "@/data/payments.data"

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "clientName",
    header: "Client Name",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: string = row.getValue("status")
      const variant = ({
        failed: "destructive",
        success: "success",
        processing: "secondary",
        pending: "info",
      }[status] ?? "default") as "destructive" | "success" | "secondary" | "default" | "outline" | "info"

      return (
        <Badge variant={variant} capitalize>
          {status}
        </Badge>
      )
    },
  },
  {
    accessorKey: "amount",
    header: () => <div className='text-right'>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)

      return <div className='font-medium text-right'>{formatted}</div>
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
]
