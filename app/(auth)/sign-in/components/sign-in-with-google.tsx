"use client";

import { supabaseClient } from "@/lib/supabase";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export function SignInWithGoogle() {
  const params = useSearchParams();
  const next = params.get("next") || "";

  const handleSignInWithGithub = async () => {
    const supabase = supabaseClient();
    const redirectTo = location.origin + "/api/auth/callback?next=" + next;

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo },
    });

    if (error) {
      throw new Error(error.message);
    }
  };

  const { mutateAsync: signInWithGoogle, isPending } = useMutation({
    mutationKey: ["sign-in-with-google"],
    mutationFn: handleSignInWithGithub,
  });

  return (
    <Button
      className="w-full flex items-center gap-2"
      variant="outline"
      onClick={async () => await signInWithGoogle()}
    >
      {isPending ? (
        <AiOutlineLoading3Quarters className="animate-spin block" />
      ) : (
        <FcGoogle />
      )}
      Google
    </Button>
  );
}
