import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Tambahkan ini di bagian atas file
import M2FAForm from '../components/forms/M2FAForm';

// Simulasi Secret Code yang bisa digunakan dalam aplikasi Anda
const secretCode = '32aebeb4ca2ee5997c7bed5d45fd075f4a6d7938862a167';

const M2FAPage: React.FC = () => {
  const [showQR, setShowQR] = useState(true);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const toggleVisibility = () => setShowQR(!showQR);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all">
        {/* Logo */}
        <div className="flex justify-center mb-6">{/* SVG Logo */}</div>

        <h2 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
          Secure Your Account
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300">
          Scan the QR Code below using your preferred authenticator app, then
          enter the one-time code provided below.
        </p>

        {showQR ? (
          <div className="flex justify-center mb-6">
            <img
              src="https://via.placeholder.com/200x200.png?text=QR+Code"
              alt="QR Code"
              className="rounded-md shadow-lg"
            />
          </div>
        ) : (
          <div className="text-center mb-6">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Your Secret Code:
            </span>
            <div className="mt-2 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white p-4 rounded-md shadow-md max-w-xs mx-auto">
              <span className="block text-lg overflow-auto font-semibold">
                {secretCode}
              </span>
            </div>
          </div>
        )}

        <p
          className="text-sm text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600 cursor-pointer"
          onClick={toggleVisibility}
        >
          {showQR
            ? 'Having trouble scanning? Then enter your one-time code'
            : 'Back to QR Code'}
        </p>

        {/* Form Component */}
        <M2FAForm onSubmit={handleSubmit} loading={loading} />

        <div className="text-sm text-center space-x-4">
          <Link
            to="/terms"
            className="font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
          >
            Terms of Use
          </Link>
          <Link
            to="/privacy"
            className="font-medium text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default M2FAPage;
