// pages/ForgotPasswordPage.tsx

import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

export default function ForgotPasswordPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center md:bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg md:shadow-lg space-y-6">
        {/*  */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold text-gray-700">
            Forgot Password?
          </h2>
          <p className="text-gray-500">
            Enter your email to reset your password. We’ll send you a reset link
            shortly.
          </p>
        </div>

        {/* ForgotPassword Form */}
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
