"use client";

import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import { supabaseClient } from "@/lib/supabase";
import { stripeClient } from "@/lib/stripe";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function Checkout({ priceId }: { priceId: string }) {
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

  const handleCheckout = async () => {
    const stripe = await stripeClient();

    if (!profile?.email) {
      return redirect("/sign-in");
    }

    const response = await fetch("/api/stripe/checkout/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: profile.email,
        priceId,
        redirectTo: location.origin + "/success",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error("Failed to create checkout session");
    }

    const res = await stripe?.redirectToCheckout({
      sessionId: data.session.id,
    });

    if (res?.error) {
      throw new Error(res.error.message);
    }
  };

  const { mutateAsync: checkout, isPending } = useMutation({
    mutationKey: ["checkout"],
    mutationFn: async () => await handleCheckout(),
    onError: () => {
      toast({ title: "Erro" });
    },
  });

  if (isLoadingUser && isLoadingProfile) {
    return <div>Carregando...</div>;
  }

  return (
    <Button
      className="w-full flex items-center gap-2"
      onClick={async () => await checkout()}
    >
      Getting Started{" "}
      <AiOutlineLoading3Quarters
        className={cn(" animate-spin", isPending ? "block" : "hidden")}
      />
    </Button>
  );
}
