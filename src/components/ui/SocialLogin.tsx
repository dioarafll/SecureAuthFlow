// components/ui/SocialLogin.tsx

import React from 'react';
import clsx from 'clsx';

interface SocialLoginProps {
  /**
   * @param icon Ikon React yang akan ditampilkan di tombol.
   */
  icon: React.ReactNode;
  /**
   * @param text Teks yang akan ditampilkan di tombol.
   */
  text: string;
  /**
   * @param className Tambahan kelas CSS untuk tombol.
   */
  className?: string;
  /**
   * @param onClick Fungsi callback saat tombol diklik.
   */
  onClick?: () => void;
}

const SocialLogin: React.FC<SocialLoginProps> = ({
  icon,
  text,
  className,
  onClick,
}) => {
  return (
    <button
      className={clsx(
        'flex justify-center items-center py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300',
        className,
      )}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </button>
  );
};

export default SocialLogin;
