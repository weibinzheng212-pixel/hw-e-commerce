import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "@mantine/core/styles.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  // weibin
  return (
    
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </MantineProvider>
  );
}

export default App;
