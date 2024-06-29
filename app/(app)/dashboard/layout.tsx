import Link from "next/link";
import { PropsWithChildren } from "react";
import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex-1 space-y-4 pt-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>

      <Menubar className="inline-flex">
        <MenubarMenu>
          <Link href="/dashboard/order-pads">
            <MenubarTrigger>Comandas</MenubarTrigger>
          </Link>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="/dashboard/stock">
            <MenubarTrigger>Estoque</MenubarTrigger>
          </Link>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="/dashboard/employeers">
            <MenubarTrigger>Funcionários</MenubarTrigger>
          </Link>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="/dashboard/invoice">
            <MenubarTrigger>Financeiro</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
      {children}
    </div>
  );
}
