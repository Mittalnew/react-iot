const BASE_URL = 'https://node-back-fiwz.onrender.com';

export const login = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    console.log('Login response status:', response.status);

    if (response.ok) {
      const data = await response.json();
      console.log('Login response data:', data);

      if (data.token) {
        console.log('Received token:', data.token);
        localStorage.setItem('token', data.token);
        console.log('Token saved in localStorage');
        return data;
      } else {
        console.error('No token received from server');
        throw new Error('Token not received from server');
      }
    } else {
      console.error('Login failed with status:', response.status);
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
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

export const fetchNews = async (page = 1, limit = 9) => {
  try {
    const token = localStorage.getItem('token'); 
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${BASE_URL}/news?page=${page}&limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    
    if (response.status === 200) {
      const data = await response.json();
      console.log('Fetched news data:', data);
      
      return {
        news: data.data,
        count: data.count,
        message: data.message,
        status: data.status
      };
    } else {
      throw new Error(`Failed to fetch news. Status: ${response.status}`);
    }
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};