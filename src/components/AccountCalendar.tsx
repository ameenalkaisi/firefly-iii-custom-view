import { useAccountStore } from "@/hooks/useAccountStore";

export const AccountCalendar = () => {
  const data = useAccountStore((state) => state.transactions);

  console.log("DATA", data);
  return <></>;
};
