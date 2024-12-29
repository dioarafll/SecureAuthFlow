// components/forms/VerifyPhoneForm.tsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';

interface VerifyPhoneFormData {
  country: string;
  phoneNumber: string;
}

const VerifyPhoneForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<VerifyPhoneFormData>({
    country: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState<{
    country?: string;
    phoneNumber?: string;
  }>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, country: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    if (!formData.country || !formData.phoneNumber) {
      setErrors({
        country: !formData.country ? 'Country is required' : undefined,
        phoneNumber: !formData.phoneNumber
          ? 'Phone number is required'
          : undefined,
      });
      setLoading(false);
      return;
    }

    try {
      // Simulate OTP request
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('OTP sent to:', formData);
      navigate('/verify-account');
    } catch (error) {
      console.error('Error during OTP request:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Country Dropdown and Phone Number Input */}
        <div className="flex items-center space-x-2 w-full">
          {/* Country Dropdown */}
          <div className="flex-1">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-600"
            >
              Country
            </label>
            <select
              name="country"
              id="country"
              value={formData.country}
              onChange={handleSelectChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Select a country</option>
              <option value="us">+1</option>
              {/* Add more country options as needed */}
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country}</p>
            )}
          </div>

          {/* Phone Number Input */}
          <div className="flex-1">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Enter mobile no.
            </label>
            <div className="flex items-center mt-1">
              <span className="text-sm text-gray-600">+</span>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Enter your phone number"
                className="ml-2 flex-1 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        {/* Button */}
        <Button type="submit" disabled={loading} className="mt-4">
          {loading ? 'Sending OTP...' : 'Get OTP'}
        </Button>
      </form>
    </>
  );
};

export default VerifyPhoneForm;
