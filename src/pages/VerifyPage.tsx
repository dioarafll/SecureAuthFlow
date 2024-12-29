// pages/VerifyPage.tsx

import VerifyForm from '../components/forms/VerifyForm';

export default function VerifyPage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center md:bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg md:shadow-lg space-y-6">
        {/*  */}
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold text-gray-700">Verify OTP</h2>
          <p className="text-gray-500">
            Enter the 6-digit code we sent to your email.
          </p>
        </div>

        {/* Verify Form */}
        <VerifyForm />
      </div>
    </div>
  );
}
