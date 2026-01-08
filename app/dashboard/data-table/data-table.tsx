"use client"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({ columns, data }: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [statusFilter, setStatusFilter] = useState("all")

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, columnFilters },
  })

  return (
    <div className='grid gap-4'>
      <div className='flex items-center justify-between gap-2'>
        <Input
          placeholder='Filter emails...'
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={event => {
            table.resetColumnFilters()
            setStatusFilter("all")
            table.getColumn("email")?.setFilterValue(event.target.value)
          }}
          className='max-w-sm'
        />
        <Select
          value={statusFilter}
          onValueChange={filter => {
            setStatusFilter(filter)
            table.getColumn("status")?.setFilterValue(filter)
          }}
        >
          <SelectTrigger className='w-45'>
            <SelectValue placeholder='Status - All' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Status</SelectLabel>
              <SelectItem value='all'>All</SelectItem>
              <SelectItem value='pending'>Pending</SelectItem>
              <SelectItem value='processing'>Processing</SelectItem>
              <SelectItem value='success'>Success</SelectItem>
              <SelectItem value='failed'>Failed</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className='overflow-hidden border rounded-md'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map(row => (
                <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className='flex items-center justify-end gap-2'>
        <Button variant='outline' size='sm' onClick={table.previousPage} disabled={!table.getCanPreviousPage()}>
          Previous
        </Button>
        <Button variant='outline' size='sm' onClick={table.nextPage} disabled={!table.getCanNextPage()}>
          Next
        </Button>
      </div>
    </div>
  )
}
