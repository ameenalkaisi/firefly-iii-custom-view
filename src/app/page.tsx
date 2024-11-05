"use client";

import { useAccountStore } from "@/hooks/useAccountStore";
import { AccountStoreProvider } from "@/providers/AccountStoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());
  const data = useAccountStore((state) => state.transactions);

  console.log("DATA", data);

  return (
    <QueryClientProvider client={queryClient}>
      <AccountStoreProvider>
        {/* <p>HI</p> */}
        {/* {/* <AccountCalendar /> */}
      </AccountStoreProvider>
    </QueryClientProvider>
  );
}
