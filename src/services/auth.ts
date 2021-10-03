import { v4 as uuid } from 'uuid';

interface SignInRequestData {
  email: string;
  password: string;
}

function delay(amount: number = 300) {
  return new Promise((resolve) => setTimeout(resolve, amount));
}

export async function signInRequest(data: SignInRequestData) {
  await delay(); // simulate backend response time
  return {
    token: uuid(),
    user: {
      name: 'Dragon Slayer',
      email: 'dragonslayer@dragon.com',
    },
  };
}

export async function recoverUserInfo() {
  await delay(); // simulate backend response time
  return {
    user: {
      name: 'Dragon Slayer',
      email: 'dragonslayer@dragon.com',
    },
  };
}
