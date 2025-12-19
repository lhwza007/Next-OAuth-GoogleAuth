import Image from "next/image";
import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col items-center">
        <LoginButton />
      </div>
    </main>
  );
}