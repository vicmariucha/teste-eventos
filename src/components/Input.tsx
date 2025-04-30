type InputProps = {
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, error, className, ...props }: InputProps) => (
  <div className="mb-4">
    <label className="block mb-1 font-medium">{label}</label>
    <input
      {...props}
      className={`border border-gray-300 p-2 rounded w-full ${className || ''}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);
