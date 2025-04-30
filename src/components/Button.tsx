type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, isLoading, ...props }: ButtonProps) => (
  <button
    {...props}
    disabled={isLoading}
    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mt-4 transition"
  >
    {isLoading ? 'Carregando...' : children}
  </button>
);
