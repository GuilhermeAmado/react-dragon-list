import { createContext, useState, useEffect } from 'react';
import { setCookie, parseCookies, destroyCookie } from 'nookies';
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
  signOut: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  const isAuthenticated = !!user;

  async function signIn({ email, password }: SignInData) {
    setIsLoading(true);
    const { token, user } = await signInRequest({ email, password });
    setCookie(undefined, 'dragonsLair.token', token, { maxAge: 60 * 60 * 1 });

    setUser(user);

    await Router.push('/dragons');
    setIsLoading(false);
  }

  async function signOut() {
    setIsLoading(true);
    destroyCookie(undefined, 'dragonsLair.token', {});
    setUser(null);
    await Router.push('/');
    setIsLoading(false);
  }

  useEffect(() => {
    const { 'dragonsLair.token': token } = parseCookies();

    if (token) {
      recoverUserInfo().then((res) => setUser(res.user));
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user, isAuthenticated, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
