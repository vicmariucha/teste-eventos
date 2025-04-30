import { FaCheckCircle } from 'react-icons/fa';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export default function Toast({ message, onClose }: ToastProps) {
  return (
    <div
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-opacity duration-500 ease-out opacity-100"
      style={{
        animation: 'fadeIn 0.5s ease-out, fadeOut 0.5s ease-out 3s forwards',
      }}
    >
      <div className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-green-100 rounded-lg shadow-lg dark:text-gray-400 dark:bg-gray-800">
        <div className="inline-flex items-center justify-center shrink-0 w-8 h-8 text-green-500 bg-green-200 rounded-lg dark:bg-green-800 dark:text-green-200">
          <FaCheckCircle className="w-5 h-5" />
        </div>
        <div className="ms-3 text-sm font-normal">{message}</div>
        <button
          type="button"
          onClick={onClose}
          className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          aria-label="Close"
        >
          <span className="sr-only">Close</span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
