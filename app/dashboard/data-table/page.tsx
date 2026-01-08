import { DataTable } from "./data-table"
import { columns } from "./columns"
import { payments } from "@/data/payments.data"

async function fetchData() {
  return payments
}

export default async function Page() {
  const data = await fetchData()
  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  )
}
