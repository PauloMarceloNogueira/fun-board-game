import React from "react";

import { Navigation } from "./Navigation/Navigation";
import { UserProvider } from "./State";

export default function App() {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
}
