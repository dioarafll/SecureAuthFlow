import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../ui/Button';
import Input from '../ui/Input';

// Definisikan tipe data untuk form
interface M2FAFormData {
  code: string;
}

const M2FAForm: React.FC<{
  onSubmit: SubmitHandler<M2FAFormData>;
  loading: boolean;
}> = ({ onSubmit, loading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<M2FAFormData>();

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label
          htmlFor="code"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          One-time Code
        </label>
        <Input
          id="code"
          type="text"
          placeholder="Enter your one-time code"
          {...register('code', { required: 'Code is required' })}
          className="mt-1"
        />
        {errors.code && (
          <p className="text-red-500 text-sm">{errors.code.message}</p>
        )}
      </div>

      <Button type="submit" className="mt-4" disabled={loading}>
        {loading ? 'Verifying...' : 'Continue'}
      </Button>
    </form>
  );
};

export default M2FAForm;
