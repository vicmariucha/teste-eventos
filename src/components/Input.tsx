type InputProps = {
    placeholder?: string;
    type?: string;
  };
  
  export default function Input({ placeholder = "", type = "text" }: InputProps) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className="px-3 py-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    );
  }
  