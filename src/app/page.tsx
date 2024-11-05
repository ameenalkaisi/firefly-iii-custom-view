"use client";

import { AccountStoreProvider } from "@/providers/AccountStoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  // TODO: fetching from firefly -- setup services etc
  // TODO: setup graph
  // TODO: setup clicks inside of graph(?) -- more details of transaction list maybe
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AccountStoreProvider>
        {/* <p>HI</p> */}
        {/* {/* <AccountCalendar /> */}
      </AccountStoreProvider>
    </QueryClientProvider>
  );
}
