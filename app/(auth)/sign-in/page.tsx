import { KeyRound } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { SignInWithGithub } from "./components/sign-in-with-github";
import { SignInWithGoogle } from "./components/sign-in-with-google";

export default function Auth() {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="w-96 h-96 rounded-md border p-5 space-y-5">
        <div className="flex items-center gap-2">
          <KeyRound />
          <h1 className="text-2xl font-bold">Easy Orders</h1>
        </div>

        <p className="text-sm text-gray-300">Register/SignIn today 👇</p>

        <div className="flex flex-col gap-5">
          <SignInWithGithub />
          <SignInWithGoogle />
        </div>
      </div>
    </div>
  );
}
