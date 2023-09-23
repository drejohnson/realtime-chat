import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SignInForm from "@/components/form/signin-form";

export const metadata: Metadata = {
  title: "Create Account",
  description: "Create Acount",
};

export default function Signin() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <div className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <div className="flex flex-col items-center justify-center bg-white px-4 text-center sm:px-16">
          <Link href="/">
            {/* <Image
              src="/logo.png"
              priority
              alt="Logo"
              className="h-10 w-10 rounded-full"
              width={20}
              height={20}
            /> */}
          </Link>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
