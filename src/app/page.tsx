"use client";

import { AccountCalendar } from "@/components/AccountCalendar";
import { AccountStoreProvider } from "@/providers/AccountStoreProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function Home() {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <AccountStoreProvider>
        <AccountCalendar />
      </AccountStoreProvider>
    </QueryClientProvider>
  );
}
