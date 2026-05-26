import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "@mantine/core/styles.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import AuthProvider from "./features/auth/pages/AuthContext";

function App() {
  // weibin
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <MantineProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools />
        </MantineProvider>
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;
