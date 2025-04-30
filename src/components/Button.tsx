type ButtonProps = {
  children: React.ReactNode;
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, isLoading, ...props }: ButtonProps) => (
  <button
    {...props}
    disabled={isLoading}
    className="w-full bg-purple-500 hover:bg-purple-700 text-white py-2 px-4 rounded mt-4 transition"
  >
    {isLoading ? 'Carregando...' : children}
  </button>
);
