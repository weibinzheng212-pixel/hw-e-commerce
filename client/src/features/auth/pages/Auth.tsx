import { createContext, useContext, useState, type ReactNode } from "react";

export interface User {
    id: number;
    username: string;
    password?: string; 
}

export interface AuthContextType {
    isLoggedIn: boolean;
    isAuthenticated: boolean;
    user: User | null;
    isLoading: boolean; 
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export default function AuthProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false); 
    const isAuthenticated = isLoggedIn && user !== null;

    const login = async (username: string, password: string) => {
        try {
            setIsLoading(true);
            setIsLoggedIn(false);
            const res = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            });
            
            if (res.ok) {
                const data = await res.json();
                setUser(data.user);
                setIsLoggedIn(true);
            } else {
                console.error("Invalid credentials");
            }
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
    };


    return (
        <AuthContext.Provider value={{ isLoggedIn, isAuthenticated, user, isLoading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};