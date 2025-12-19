"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div>
        <p>ยินดีต้อนรับคุณ {session.user?.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
        <img src="https://res.cloudinary.com/dlepqo9ao/image/upload/v1766113288/next-upload/vjvnzhqv5ndhabmim1sr.jpg"></img>
      </div>
    );
  }
  return (
    <button onClick={() => signIn("google")}>
      Sign in with Google
    </button>
  );
}