"use client";

import Link from "next/link";
import { supabaseClient } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";
import {
  User,
  Bell,
  Settings,
  LogOut,
  CreditCard,
  BriefcaseBusiness,
} from "lucide-react";
import { Button } from "./ui/button";
import { ToastAction } from "./ui/toast";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

export function Profile() {
  const { push } = useRouter();
  const { toast } = useToast();

  const fetchUser = async () => {
    const supabase = supabaseClient();

    const { data, error } = await supabase.auth.getUser();

    if (error) {
      throw new Error(error.message);
    }

    return data.user;
  };

  const { data: user, isLoading: isLoadingUser } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  const fetchProfile = async (id: string) => {
    const supabase = supabaseClient();

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("*, subscriptions(*)")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return profile;
  };

  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: () => fetchProfile(user?.id ?? ""),
  });

  const handleSignOut = async () => {
    const supabase = supabaseClient();

    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message);
    }
  };

  const { mutateAsync: signOut } = useMutation({
    mutationKey: ["sign-out"],
    mutationFn: handleSignOut,
    onSuccess: () => push("/sign-in"),
    onError: () => {
      toast({
        title: "Error",
        description: "Ocorreu um erro ao tentar fazer logout.",
        action: (
          <ToastAction
            onClick={async () => await signOut()}
            altText="Tente novamente"
          >
            Try again
          </ToastAction>
        ),
      });
    },
  });

  if (isLoadingUser && isLoadingProfile) {
    return <div>Carregando...</div>;
  }

  if (profile !== undefined && profile === null) {
    return (
      <Link href="/sign-in" className="animate-fade">
        <Button variant="outline">Sign In</Button>
      </Link>
    );
  }

  return (
    <div className="flex gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={profile?.image_url ?? undefined} />
            <AvatarFallback>{profile?.email[0].toUpperCase()}</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="" align="end">
          <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>

          <DropdownMenuItem>
            <Link href="/profile" className="flex w-full">
              <User className="mr-2 h-4 w-4" />
              <span>Perfil</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/notifications" className="flex w-full">
              <Bell className="mr-2 h-4 w-4" />
              <span>Notificação</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/billing" className="flex w-full">
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Cobrança</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Link href="/new-business" className="flex w-full">
              <BriefcaseBusiness className="mr-2 h-4 w-4" />
              <span>Novo Empreendimento</span>
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuLabel>Geral</DropdownMenuLabel>

          <DropdownMenuItem className="cursor-pointer">
            <Settings className="mr-2 h-4 w-4" />
            <span>Configurações</span>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="cursor-pointer"
            onClick={async () => await signOut()}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
