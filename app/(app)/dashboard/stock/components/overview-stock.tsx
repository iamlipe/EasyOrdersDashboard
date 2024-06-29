import { BarChart } from "@/components/charts/bars-chart";

export function OverviewStock() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col">
        <span>Quantidade em estoque</span>
        <span>10</span>
      </div>
      <div className="flex flex-col">
        <span>Quantidade vendida</span>
        <span>10</span>
      </div>
      <div className="flex flex-col">
        <span>Repor estoque</span>
        <span>10</span>
      </div>
      <div className="flex flex-col">
        <span>Fornecedor</span>
        <span>10</span>
      </div>

      <div className="pt-4">
        <BarChart height={180} />
      </div>
    </div>
  );
}
