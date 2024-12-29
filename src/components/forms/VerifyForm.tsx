// components/forms/VerifyForm.tsx

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';

// Define the form fields
interface VerifyFormData {
  otp: string[]; // Change this to an array of strings
}

const VerifyForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyFormData>();
  const navigate = useNavigate();

  /**
   * Handle OTP submission
   * @param data OTP entered by the user
   */
  const onSubmit: SubmitHandler<VerifyFormData> = async (data) => {
    setLoading(true);
    try {
      // Simulate OTP verification (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('OTP Submitted:', data);
      navigate('/'); // Redirect to a success page (update route as needed)
    } catch (error) {
      console.error('Error verifying OTP:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* OTP Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex justify-between space-x-2">
          {/* OTP Input Fields */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-1/6">
              <Input
                type="text"
                maxLength={1}
                {...register(`otp.${index}`, { required: 'OTP is required' })}
                className="w-full text-center"
              />
              {errors.otp?.[index] && (
                <p className="text-red-500 text-sm">
                  {errors.otp[index]?.message}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Verify Button */}
        <div className="flex justify-center mt-6">
          <Button type="submit" disabled={loading}>
            {loading ? 'Verifying OTP...' : 'Verify OTP'}
          </Button>
        </div>
      </form>

      {/* Resend OTP */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Didn’t receive the code?{' '}
          <Link
            to="#"
            className="text-blue-500 hover:text-blue-700 transition duration-200"
          >
            Resend OTP
          </Link>
        </p>
      </div>
    </>
  );
};

export default VerifyForm;
