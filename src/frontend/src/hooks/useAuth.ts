import { useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useMemo } from "react";

export interface AuthState {
  isAuthenticated: boolean;
  isLoading: boolean;
  principal: string | null;
  login: () => void;
  logout: () => void;
}

export function useAuth(): AuthState {
  const { loginStatus, identity, login, clear } = useInternetIdentity();

  return useMemo(
    () => ({
      isAuthenticated: loginStatus === "success" && !!identity,
      isLoading: loginStatus === "logging-in",
      principal: identity?.getPrincipal().toString() ?? null,
      login,
      logout: clear,
    }),
    [loginStatus, identity, login, clear],
  );
}
