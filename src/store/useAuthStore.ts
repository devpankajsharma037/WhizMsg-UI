import { create } from "zustand";
import { useEffect } from "react";

type User = {
  accessToken: string;
  refreshToken: string;
  email: string;
};

type AuthState = {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(user));
    }
    set({ user });
  },
  clearUser: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
    }
    set({ user: null });
  },
}));

export const useInitAuthStore = () => {
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [setUser]);
};
