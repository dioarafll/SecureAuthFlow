// pages/SignUpPage.tsx

import { Link } from 'react-router-dom';
import SignUpForm from '../components/forms/SignUpForm';

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center md:bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg md:shadow-lg space-y-6">
        {/*  */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold text-gray-700">
            Create an Account
          </h2>
          <p className="text-gray-500">
            Start your journey with us. Already have an account?{' '}
            <Link
              to="/signin"
              className="text-blue-500 hover:text-blue-700 transition duration-200"
            >
              Sign in
            </Link>
            .
          </p>
        </div>

        {/* SignUp Form */}
        <SignUpForm />
      </div>
    </div>
  );
}
