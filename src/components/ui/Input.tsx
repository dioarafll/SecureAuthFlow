// components/ui/Input.tsx

import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface InputProps {
  /**
   * @param type Tipe input (e.g., text, password, email).
   */
  type: string;
  /**
   * @param id ID unik untuk input.
   */
  id?: string;
  /**
   * @param name Nama field input.
   */
  name?: string;
  /**
   * @param placeholder Placeholder untuk input.
   */
  placeholder?: string;
  /**
   * @param className Tambahan kelas CSS untuk input.
   */
  className?: string;
  /**
   * @param required Apakah input wajib diisi. Default `false`.
   */
  required?: boolean;
  /**
   * @param onChange Fungsi callback saat input berubah.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @param ref Referensi untuk input element.
   */
  ref?: React.Ref<HTMLInputElement>;
}

/**
 * Input component with forwarded ref to allow access to the DOM element
 * @param type Tipe input (e.g., text, password, email)
 * @param id ID unik untuk input
 * @param name Nama field input
 * @param placeholder Placeholder untuk input
 * @param className Tambahan kelas CSS untuk input
 * @param required Apakah input wajib diisi
 * @param onChange Fungsi callback saat input berubah
 * @param ref Referensi untuk input element
 */
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { type, id, name, placeholder, className, required = false, onChange },
    ref,
  ) => {
    return (
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        className={clsx(
          'w-full p-3 mt-2 rounded-md border border-gray-300 focus:border-gray-500 focus:ring-2 focus:ring-gray-200 transition duration-300',
          className,
        )}
        onChange={onChange}
        ref={ref} // Forwarding the ref to the input element
      />
    );
  },
);

Input.displayName = 'Input'; // Set the display name for easier debugging

export default Input;
