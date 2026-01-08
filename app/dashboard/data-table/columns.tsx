"use client"

import { ChevronDown, ChevronUp, ChevronsUpDown, MoreHorizontal } from "lucide-react"
import { ColumnDef, SortDirection } from "@tanstack/react-table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Payment } from "@/data/payments.data"
import { toast } from "sonner"

const SortedIcon = ({ isSorted }: { isSorted: SortDirection | false }) => {
  const className = "w-4 h-4 ml-2 transition-all"
  return isSorted === "asc" ? (
    <ChevronUp className={className} />
  ) : isSorted === "desc" ? (
    <ChevronDown className={className} />
  ) : (
    <ChevronsUpDown className={className} />
  )
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={value => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={value => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "clientName",
    header: ({ column }) => (
      <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Client Name
        <SortedIcon isSorted={column.getIsSorted()} />
      </Button>
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Status
        <SortedIcon isSorted={column.getIsSorted()} />
      </Button>
    ),
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
    header: ({ column }) => (
      <div className='text-right'>
        <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Amount
          <SortedIcon isSorted={column.getIsSorted()} />
        </Button>
      </div>
    ),
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
    header: ({ column }) => (
      <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
        Email
        <SortedIcon isSorted={column.getIsSorted()} />
      </Button>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='w-8 h-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='w-4 h-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(payment.id)
                toast.success("Payment ID copied to clipboard", { position: "top-right", richColors: true })
              }}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
