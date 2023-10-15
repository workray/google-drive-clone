import React from "react";
import { signIn } from "next-auth/react";
import Button from "@/components/common/Button";
import { useFetchSession } from "@/hooks/useSession";

export default function Topbar() {
  const { session } = useFetchSession();
  return (
    <div className="absolute right-5 top-5">
      {session ? (
        <img
          src={session?.user.image as string}
          className="w-24 cursor-pointer rounded-full"
        />
      ) : (
        <Button
          onClick={() => signIn()}
          btnClass="btn-primary"
          title="Sign Up!"
        />
      )}
    </div>
  );
}
