// pages/SignInPage.tsx

import { Link } from 'react-router-dom';
import SignInForm from '../components/forms/SignInForm';

export default function SignInPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center md:bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg md:shadow-lg space-y-6">
        {/* Welcome message */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold text-gray-700">Welcome back</h2>
          <p className="text-gray-500">
            Start your website in seconds. Don’t have an account?{' '}
            <Link
              to="/signup"
              className="text-blue-500 hover:text-blue-700 transition duration-200"
            >
              Sign up
            </Link>
            .
          </p>
        </div>

        {/* SignIn Form */}
        <SignInForm />
      </div>
    </div>
  );
}
