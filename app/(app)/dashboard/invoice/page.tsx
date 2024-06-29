import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TotalInvoicing } from "./components/total-invoicing";
import { TotalSpending } from "./components/total-spending";
import { TotalProfit } from "./components/total-profit";
import { ListInvoicing } from "./components/list-invoicing";
import { ListSpending } from "./components/list-spending";
import { ListProfit } from "./components/list-profit";
import { HandCoins, Landmark, PiggyBank } from "lucide-react";

export default function Invoice() {
  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Faturamento</CardTitle>
              <Landmark />
            </CardHeader>

            <CardContent>
              <TotalInvoicing />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Vendas</CardTitle>
            </CardHeader>

            <CardContent>
              <ListInvoicing />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                Despesas & Gastos
              </CardTitle>
              <HandCoins />
            </CardHeader>

            <CardContent>
              <TotalSpending />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Despesas</CardTitle>
            </CardHeader>

            <CardContent>
              <ListSpending />
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Lucro</CardTitle>
              <PiggyBank />
            </CardHeader>

            <CardContent>
              <TotalProfit />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Profit</CardTitle>
            </CardHeader>

            <CardContent>
              <ListProfit />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
