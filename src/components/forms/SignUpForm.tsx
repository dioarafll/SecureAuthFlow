// components/forms/SignUpForm.tsx

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FaGoogle, FaApple } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Checkbox from '../ui/Checkbox';
import SocialLogin from '../ui/SocialLogin';

// Define the form fields
interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const SignUpForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const navigate = useNavigate();

  /**
   * Handle form submission
   * @param data Data submitted from the form
   */
  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    setLoading(true);
    try {
      if (data.password !== data.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form Submitted:', data);
      // After successful signup, redirect to the Sign In page
      navigate('/');
    } catch (error) {
      console.error('Error during sign-up:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name Input */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <Input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            {...register('fullName', { required: 'Full name is required' })}
            className="mt-1"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

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

        {/* Confirm Password Input */}
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-600"
          >
            Confirm Password
          </label>
          <Input
            type="password"
            id="confirmPassword"
            placeholder="Confirm your password"
            {...register('confirmPassword', {
              required: 'Confirm password is required',
            })}
            className="mt-1"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Agree to Terms Checkbox */}
        <div className="flex items-center">
          <Checkbox
            id="agreeToTerms"
            {...register('agreeToTerms', {
              required: 'You must agree to the terms',
            })}
            className="mr-2"
          />
          <label htmlFor="agreeToTerms" className="text-sm text-gray-600">
            I agree to the{' '}
            <Link to="/terms" className="text-blue-500 hover:text-blue-700">
              terms and conditions
            </Link>
          </label>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
        )}

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Creating your account...' : 'Create your account'}
          </Button>
        </div>
      </form>

      {/* Social Signup Options */}
      <div className="mt-6 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
        <SocialLogin
          icon={<FaGoogle />}
          text="Sign up with Google"
          onClick={() => console.log('Google signup')}
          className="w-full md:w-auto"
        />
        <SocialLogin
          icon={<FaApple />}
          text="Sign up with Apple"
          onClick={() => console.log('Apple signup')}
          className="w-full md:w-auto"
        />
      </div>

      {/* Redirect to Sign In */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{' '}
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Sign in
        </Link>
      </p>
    </>
  );
};

export default SignUpForm;
