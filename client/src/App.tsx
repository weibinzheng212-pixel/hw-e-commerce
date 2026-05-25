import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "@mantine/core/styles.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "./features/auth/pages/authcontext";


function App() {
  // weibin
  return (

    <AuthProvider>
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </MantineProvider>
    </AuthProvider>
  );
}

export default App;
