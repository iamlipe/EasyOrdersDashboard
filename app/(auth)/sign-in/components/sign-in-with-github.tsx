"use client";

import { supabaseClient } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function SignInWithGithub() {
  const params = useSearchParams();
  const next = params.get("next") || "";

  const handleSignInWithGithub = async () => {
    const supabase = supabaseClient();
    const redirectTo = location.origin + "/api/auth/callback?next=" + next;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: { redirectTo },
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  const { mutateAsync: signInWithGithub, isPending } = useMutation({
    mutationKey: ["sign-in-with-github"],
    mutationFn: handleSignInWithGithub,
  });

  return (
    <Button
      className="w-full flex items-center gap-2"
      variant="outline"
      onClick={async () => await signInWithGithub()}
    >
      {isPending ? (
        <AiOutlineLoading3Quarters className="animate-spin block" />
      ) : (
        <FaGithub />
      )}
      Github
    </Button>
  );
}
