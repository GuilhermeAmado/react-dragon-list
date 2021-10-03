import { createContext, useState, useEffect } from 'react';
import { setCookie, parseCookies } from 'nookies';
import { recoverUserInfo, signInRequest } from '../services/auth';
import Router from 'next/router';

interface SignInData {
  email: 'string';
  password: 'string';
}

interface User {
  name: 'string';
  email: 'string';
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    const { token, user } = await signInRequest({ email, password });
    setCookie(undefined, 'dragonsLair.token', token, { maxAge: 60 * 60 * 1 });

    setUser(user);
    Router.push('/dragons');
  }

  useEffect(() => {
    const { 'dragonsLair.token': token } = parseCookies();

    if (token) {
      recoverUserInfo().then((res) => setUser(res.user));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, user, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}
