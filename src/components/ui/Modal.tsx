// components/ui/Modal.tsx
import React from 'react';

/**
 * Modal component yang dapat digunakan kembali.
 * @param {boolean} isOpen - Menentukan apakah modal ditampilkan atau tidak.
 * @param {Function} onClose - Fungsi yang dipanggil saat modal ditutup.
 * @param {React.ReactNode} children - Isi konten modal, dapat berupa elemen apa pun.
 * @param {string} title - Judul modal (opsional).
 * @returns {JSX.Element} Komponen modal yang bisa digunakan kembali.
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}) => {
  // Fungsi untuk menangani close modal ketika mengklik area di luar modal
  const handleOutsideClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
      onClose();
    }
  };

  return (
    <div
      className={`modal-overlay fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ${
        isOpen ? 'block' : 'hidden'
      }`}
      onClick={handleOutsideClick}
    >
      <div
        className="bg-white p-6 rounded-lg w-full h-full md:w-2/4 md:h-full max-w-3xl space-y-4 transform transition-all duration-300 overflow-auto"
        onClick={(e) => e.stopPropagation()} // Mencegah klik dalam modal menutup modal
      >
        {/* Header modal */}
        <div className="flex justify-between items-center">
          {title && <h2 className="text-xl font-semibold">{title}</h2>}
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
            aria-label="Close"
          >
            <span>&times;</span>
          </button>
        </div>

        {/* Konten modal */}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
