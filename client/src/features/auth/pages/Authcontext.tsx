import { Children, createContext, useState, type ReactNode } from "react";

export interface User {
    id: number;
    username: string;
}

export interface AuthContextType{
    isLoggedIn: boolean;
    user: User | null;
    login:(username: string, password: string) => Promise<void>
    logout: () => void;
}


 const AuthContext = createContext<AuthContextType | null>(null);


export default function AuthProvider({childern}: {children: ReactNode}){
    const[isloggedIn, seIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const login = async () => {
        const res = await fetch("")

    }

//     return {
//         <AuthContextType.Provider value = {{isloggedIn, user}}>
//          {children}
//         </AuthContextType.Provider>

//     }

}