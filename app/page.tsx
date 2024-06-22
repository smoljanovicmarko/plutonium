import React from "react";
import "@aws-amplify/ui-react/styles.css";
import Logout from "@/components/Logout";
import { AuthGetCurrentUserServer } from "@/utils/amplify-utils";

export default async function Home() {
  const user = await AuthGetCurrentUserServer();

  return (
    <main>
      <h1>Home</h1>
      {user && <Logout />}
    </main>
  );
}
