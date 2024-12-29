// components/ui/Button.tsx

import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  /**
   * @param type Jenis tombol: 'button', 'submit', atau 'reset'. Default 'button'.
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * @param className Tambahan kelas CSS untuk tombol.
   */
  className?: string;
  /**
   * @param children Konten yang akan ditampilkan dalam tombol.
   */
  children: React.ReactNode;
  /**
   * @param onClick Fungsi callback saat tombol diklik.
   */
  onClick?: () => void;
  /**
   * @param disabled Apakah tombol dinonaktifkan?
   */
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type = 'button',
  className,
  children,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      type={type}
      className={clsx(
        'w-full py-3 px-4 bg-gray-900 text-white rounded-lg shadow-md hover:bg-gray-800 active:bg-gray-700 focus:ring-4 focus:ring-gray-300 transition duration-200',
        className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
