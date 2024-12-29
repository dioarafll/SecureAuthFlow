import VerifyPhoneForm from '../components/forms/VerifyPhoneForm';

export default function VerifyPhonePage() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center md:bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg md:shadow-lg space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold text-gray-700">
            Verify your phone number
          </h2>
          <p className="text-gray-500">
            We have sent you an One-Time Password (OTP) on this mobile number
          </p>
        </div>

        {/* Form */}
        <VerifyPhoneForm />
      </div>
    </div>
  );
}
