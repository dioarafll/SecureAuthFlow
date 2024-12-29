// components/forms/SignInForm.tsx

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';
import SocialLogin from '../ui/SocialLogin';

// Define the form fields
interface SignInFormData {
  email: string;
  password: string;
  remember: boolean;
}

const SignInForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const navigate = useNavigate();

  /**
   * Handle form submission
   * @param data Data submitted from the form
   */
  const onSubmit: SubmitHandler<SignInFormData> = async (data) => {
    setLoading(true);
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form Submitted:', data);
      // Perform redirect or other actions on success
      navigate('/phone-verification');
    } catch (error) {
      console.error('Error during sign-in:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Input */}
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

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            placeholder="Enter your password"
            {...register('password', { required: 'Password is required' })}
            className="mt-1"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Remember Me and Forgot Password */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Checkbox
              id="remember"
              {...register('remember')}
              className="mr-2"
            />
            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div>
          <Link
            to="/forgot-password"
            className="text-sm text-blue-500 hover:text-blue-700 transition duration-200"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </Button>
        </div>
      </form>

      {/* Social Login Options */}
      <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <SocialLogin
          icon={<FaGoogle />}
          text="Sign in with Google"
          onClick={() => console.log('Google sign-in')}
          className="w-full md:w-auto"
        />
        <SocialLogin
          icon={<FaApple />}
          text="Sign in with Apple"
          onClick={() => console.log('Apple sign-in')}
          className="w-full md:w-auto"
        />
      </div>

      {/* Redirect to Sign Up */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Don’t have an account?{' '}
        <Link to="/register" className="text-blue-500 hover:text-blue-700">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default SignInForm;
