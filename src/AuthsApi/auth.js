const BASE_URL = 'https://node-back-fiwz.onrender.com';

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  
  if (!response.ok) {
    throw new Error('Login failed');
  }
  
  return response.json();
};

export const signup = async (username, email, password) => {
  const response = await fetch(`${BASE_URL}/api/signUp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username,  password }),
  });
  
  if (!response.ok) {
    throw new Error('Signup failed');
  }
  
  return response.json();
};