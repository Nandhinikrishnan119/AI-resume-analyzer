import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getStoredUser } from "../services/api";

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [user, setUser] = useState(() => getStoredUser());
  const [token, setToken] = useState(() => localStorage.getItem("resumeai_token") || "");

  useEffect(() => {
    if (user) {
      localStorage.setItem("resumeai_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("resumeai_user");
    }
  }, [user]);

  useEffect(() => {
    if (token) {
      localStorage.setItem("resumeai_token", token);
    } else {
      localStorage.removeItem("resumeai_token");
    }
  }, [token]);

  const value = useMemo(() => ({ user, setUser, token, setToken }), [user, token]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}
