import { BadgeDollarSign, ClipboardEdit, CreditCard } from "lucide-react";
import { TotalOrderPads } from "./components/total-order-pads";
import { TotalOrders } from "./components/total-orders";
import { TotalSales } from "./components/total-sales";
import { OverviewOrderPads } from "./components/overview-order-pads";
import { ListOrderPads } from "./components/list-order-pads";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function OrderPads() {
  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-bold">Total</CardTitle>
            <BadgeDollarSign />
          </CardHeader>

          <CardContent>
            <TotalOrderPads />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-bold">Total</CardTitle>
            <CreditCard />
          </CardHeader>

          <CardContent>
            <TotalSales />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-bold">Total</CardTitle>
            <ClipboardEdit />
          </CardHeader>

          <CardContent>
            <TotalOrders />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader className="flex space-y-0 pb-2">
            <CardTitle className="text-lg font-bold">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <OverviewOrderPads />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader className="flex space-y-0 pb-2">
            <CardTitle className="text-lg font-bold">
              Comandas Recente
            </CardTitle>
            <CardDescription>
              Foram abertas 439 Comdas essa semana.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ListOrderPads />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
