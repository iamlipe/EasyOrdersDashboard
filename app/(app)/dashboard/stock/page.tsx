import { ListStock } from "./components/list-stock";
import { TotalStock } from "./components/total-stock";
import { TotalProducts } from "./components/total-products";
import { TotalCategories } from "./components/total-categories";
import { TotalSuppliers } from "./components/total-suppliers";
import { OverviewStock } from "./components/overview-stock";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Barcode, Blocks, Container, Package } from "lucide-react";

export default function Stock() {
  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle className="text-lg font-medium">Produtos</CardTitle>
            <CardDescription>
              Foram cadastradas 29 produtos esse mês.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <ListStock />
          </CardContent>
        </Card>

        <Card className="col-span-2 space-y-4">
          <CardHeader className="flex space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Skoll 600ml</CardTitle>
            <CardDescription>Bebidas</CardDescription>
          </CardHeader>
          <CardContent>
            <OverviewStock />
          </CardContent>
        </Card>

        <div className="flex flex-col space-y-4 col-span-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Estoque</CardTitle>
              <Package />
            </CardHeader>
            <CardContent>
              <TotalStock />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Produtos</CardTitle>
              <Barcode />
            </CardHeader>
            <CardContent>
              <TotalProducts />
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">Categorias</CardTitle>
              <Blocks />
            </CardHeader>
            <CardContent>
              <TotalCategories />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-medium">
                Fornecedores
              </CardTitle>
              <Container />
            </CardHeader>

            <CardContent>
              <TotalSuppliers />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
