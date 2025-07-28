import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningIn: false,
  isLoggingIN: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
    } catch (error) {}
  },
}));
