// components/ui/Checkbox.tsx

import React, { forwardRef } from 'react';
import clsx from 'clsx';

interface CheckboxProps {
  /**
   * @param id ID unik untuk checkbox.
   */
  id?: string;
  /**
   * @param name Nama field checkbox.
   */
  name?: string;
  /**
   * @param className Tambahan kelas CSS untuk checkbox.
   */
  className?: string;
  /**
   * @param onChange Fungsi callback saat checkbox berubah.
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * @param ref Referensi untuk checkbox element.
   */
  ref?: React.Ref<HTMLInputElement>;
}

/**
 * Checkbox component with forwarded ref to allow access to the DOM element
 * @param id ID unik untuk checkbox
 * @param name Nama field checkbox
 * @param className Tambahan kelas CSS untuk checkbox
 * @param onChange Fungsi callback saat checkbox berubah
 * @param ref Referensi untuk checkbox element
 */
const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, name, className, onChange }, ref) => {
    return (
      <input
        type="checkbox"
        id={id}
        name={name}
        className={clsx(
          'h-4 w-4 text-green-500 border-gray-300 rounded focus:ring-gray-500',
          className,
        )}
        onChange={onChange}
        ref={ref} // Forwarding the ref to the checkbox element
      />
    );
  },
);

Checkbox.displayName = 'Checkbox'; // Set the display name for easier debugging

export default Checkbox;
