import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../AuthsApi/auth';
import Loader from '../../Loader/Loader';
import { useToast } from '../../Toast/ToastProvider';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // State for loading
  const navigate = useNavigate();
  const { notify } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true); // Start loading

    try {
      const data = await login(username, password);
      console.log('Login successful', data);
      notify('Login successful!', 'success');
      navigate('/dashboard');
    } catch (error) {
      setError(error.message || 'An error occurred. Please try again.');
      notify('Login failed: ' + (error.message || 'An error occurred. Please try again.'), 'error');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-4xl font-extrabold text-gray-900">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Log in to your account
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-150 ease-in-out"
              disabled={loading} // Disable button while loading
            >
             {loading ? (
                <>
                  <Loader />
                  <span className="ml-2">Please wait a moment...</span> 
                </>
              ) : (
                'Log in'
              )}
            </button>
          </div>
        </form>
        <div className="text-center">
          <Link to="/signup" className="font-medium text-purple-600 hover:text-purple-500">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
