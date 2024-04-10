import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { ROUTE } from "@/lib/constant";

export function useTokenToRedirect(tokenResponse?: string) {
  const router = useRouter();
  
  useEffect(() => {
    const accessTokenInLocalStorage = localStorage.getItem("accessToken");
    const routeToFolderPage = () => {
      router.replace(ROUTE.폴더);
    };

    if (tokenResponse) {
      routeToFolderPage();
      return;
    }

    if (accessTokenInLocalStorage) {
      routeToFolderPage();
    }
  }, [tokenResponse, router]);
}