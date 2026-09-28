import { useCallback, useState } from "react";
import * as api from "./api.js";
import { AuthContext } from "./AuthContextValue.js";

function getStoredUser() {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getStoredUser);
  const [token, setToken] = useState(() => localStorage.getItem("token"));

  const saveUser = useCallback((authenticatedUser) => {
    localStorage.setItem("token", authenticatedUser.token);
    localStorage.setItem("user", JSON.stringify(authenticatedUser));
    setToken(authenticatedUser.token);
    setUser(authenticatedUser);
  }, []);

  const login = useCallback(
    async (loginValue, password) => {
      const { user: authenticatedUser } = await api.signIn(
        loginValue,
        password,
      );
      saveUser(authenticatedUser);
      return authenticatedUser;
    },
    [saveUser],
  );

  const register = useCallback(
    async (loginValue, name, password) => {
      const { user: authenticatedUser } = await api.signUp(
        loginValue,
        name,
        password,
      );
      saveUser(authenticatedUser);
      return authenticatedUser;
    },
    [saveUser],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setToken(null);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: Boolean(token),
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
