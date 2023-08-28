import React from "react";
import ToDo from "./components/todo/todo";
import Settings from "../src/Context/Settings/index";

import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Settings>
        <ToDo />
      </Settings>
    </MantineProvider>
  );
}
