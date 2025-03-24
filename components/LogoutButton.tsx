"use client";

import { Button } from "./ui/button";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import { logout } from "@/lib/actions/auth.action";

export default function LogoutButton() {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      await logout();

      window.location.href = "/";
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <Button className="btn-secondary" onClick={handleLogout}>
      Log out
    </Button>
  );
}
