import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TotalEmployeers } from "./components/total-employeers";
import { TotalPayroll } from "./components/total-payroll";
import { ListEmployeers } from "./components/list-employeers";
import { Banknote, UserRoundCog } from "lucide-react";

export default function Employeers() {
  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">Funcionarios</CardTitle>
            <UserRoundCog />
          </CardHeader>
          <CardContent>
            <TotalEmployeers />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-lg font-medium">
              Folha de Pagemento
            </CardTitle>
            <Banknote />
          </CardHeader>
          <CardContent>
            <TotalPayroll />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader className="flex space-y-0 pb-2">
          <CardTitle className="text-lg font-medium">
            Lista Funcionarios
          </CardTitle>
          <CardDescription>8 funcionarios</CardDescription>
        </CardHeader>
        <CardContent>
          <ListEmployeers />
        </CardContent>
      </Card>
    </div>
  );
}
