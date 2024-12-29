// components/forms/ForgotPasswordForm.tsx

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';

// Define the form fields
interface ForgotPasswordFormData {
  email: string;
}

const ForgotPasswordForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>();
  const navigate = useNavigate();

  /**
   * Handle password reset link submission
   * @param data Email entered by the user
   */
  const onSubmit: SubmitHandler<ForgotPasswordFormData> = async (data) => {
    setLoading(true);
    try {
      // Simulate sending reset link (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Reset link sent to:', data.email);
      navigate('/'); // Redirect to a success page (update route as needed)
    } catch (error) {
      console.error('Error sending reset link:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Forgot Password Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            {...register('email', { required: 'Email is required' })}
            className="mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Send Reset Link Button */}
        <div className="flex justify-center mt-6">
          <Button type="submit" disabled={loading}>
            {loading ? 'Sending Reset Link...' : 'Send Reset Link'}
          </Button>
        </div>
      </form>

      {/* Back to Sign In */}
      <div className="text-center">
        <p className="text-sm text-gray-500">
          Remembered your password?{' '}
          <Link
            to="/"
            className="text-blue-500 hover:text-blue-700 transition duration-200"
          >
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPasswordForm;
