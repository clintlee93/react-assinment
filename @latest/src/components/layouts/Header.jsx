import React, { useState } from 'react';


const Header = () => {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  }); 
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSignIn = () => {
    setShowSignInModal(true);
    setMessage('');
  };

  const handleLogin = () => {
    setShowLoginModal(true);
    setMessage('');
  };

  const closeModals = () => {
    setShowSignInModal(false);
    setShowLoginModal(false);
    setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    setLoginData({ email: '', password: '' });
    setMessage('');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.register({
        name: formData.name,
        email: formData.email,
        password: formData.password
      });

      if (response.data.success) {
        localStorage.setItem('userToken', response.data.data.token);
        localStorage.setItem('userInfo', JSON.stringify(response.data.data));
        setMessage('Registration successful! Welcome to Little Chef Cafe!');
        setTimeout(() => {
          closeModals();
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || 
        'Registration failed. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await authAPI.login(loginData);

      if (response.data.success) {
        localStorage.setItem('userToken', response.data.data.token);
        localStorage.setItem('userInfo', JSON.stringify(response.data.data));
        setMessage('Login successful! Welcome back!');
        setTimeout(() => {
          closeModals();
          window.location.reload();
        }, 2000);
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message || 
        'Login failed. Please check your credentials.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userInfo');
    window.location.reload();
  };

  const userInfo = JSON.parse(localStorage.getItem('userInfo') || 'null');

  return (
    <>
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <i className="fas fa-mug-hot text-amber-500 text-[40px] -mt-2.5 filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-20 mr-1.5"></i>
            <h1 className="text-2xl font-bold text-white">Little Chef Cafe</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8 text-white">
            <a href="#" className="hover:text-amber-400 transition-colors">Home</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Menu</a>
            <a href="#" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Locations</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Contact</a>
          </nav>

          <div className="flex space-x-2 md:space-x-4 items-center">
            {userInfo ? (
              <div className="flex items-center space-x-4">
                <span className="text-white">Welcome, {userInfo.name}</span>
                <button 
                  onClick={handleLogout}
                  className="border border-amber-500 hover:bg-amber-500 hover:text-black text-amber-500 px-3 py-1.5 md:px-4 md:py-2 rounded-md font-medium transition-colors text-sm md:text-base"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={handleSignIn}
                  className="border border-amber-500 hover:bg-amber-600 hover:text-black text-amber-500 px-3 py-1.5 md:px-4 md:py-2 rounded-md font-medium transition-colors text-sm md:text-base"
                >
                  Sign In
                </button>
                <button 
                  onClick={handleLogin}
                  className="border border-amber-500 hover:bg-amber-500 hover:text-black text-amber-500 px-3 py-1.5 md:px-4 md:py-2 rounded-md font-medium transition-colors text-sm md:text-base"
                >
                  Log In
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Sign Up Modal */}
      {showSignInModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeModals}>
          <div className="bg-gray-900 rounded-lg p-6 w-11/12 md:w-96 max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-100">Create Account</h2>
              <button onClick={closeModals} className="text-gray-100 hover:text-amber-400 text-2xl">
                &times;
              </button>
            </div>
            
            {message && (
              <div className={`mb-4 p-3 rounded ${message.includes('successful') ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                {message}
              </div>
            )}
            
            <form className="space-y-4" onSubmit={handleRegister}>
              <input 
                type="text"
                name="name"
                placeholder="Full Name" 
                className="w-full px-3 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white bg-gray-800"
                value={formData.name}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="w-full px-3 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white bg-gray-800"
                value={formData.email}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="password" 
                name="password"
                placeholder="Password" 
                className="w-full px-3 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white bg-gray-800"
                value={formData.password}
                onChange={handleInputChange}
                required 
              />
              <input 
                type="password" 
                name="confirmPassword"
                placeholder="Confirm Password" 
                className="w-full px-3 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 text-white bg-gray-800"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required 
              />
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition-colors font-medium disabled:opacity-50"
              >
                {loading ? 'Creating Account...' : 'Sign Up'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80" onClick={closeModals}>
          <div className="bg-gray-900 rounded-lg p-6 w-11/12 md:w-96 max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
              <button onClick={closeModals} className="text-white hover:text-gray-100 text-2xl">
                &times;
              </button>
            </div>
            
            {message && (
              <div className={`mb-4 p-3 rounded ${message.includes('successful') ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                {message}
              </div>
            )}
            
            <form className="space-y-4" onSubmit={handleLoginSubmit}>
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="w-full px-3 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 text-white bg-gray-800 focus:ring-amber-500"
                value={loginData.email}
                onChange={handleLoginInputChange}
                required 
              />
              <input 
                type="password" 
                name="password"
                placeholder="Password" 
                className="w-full px-3 py-2 border border-gray-100 rounded-md focus:outline-none focus:ring-2 text-white bg-gray-800 focus:ring-amber-500"
                value={loginData.password}
                onChange={handleLoginInputChange}
                required 
              />
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition-colors font-medium disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </button>
            </form>
            <p className="text-center mt-4 text-blue-200">
              Don't have an account?{' '}
              <button 
                type="button" 
                onClick={() => {
                  setShowLoginModal(false);
                  setShowSignInModal(true);
                }}
                className="text-amber-500 hover:text-amber-600 font-medium"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;