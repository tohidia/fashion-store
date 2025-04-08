// src/components/Button.js
const Button = ({ children, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white rounded ${className}`}
      >
        {children}
      </button>
    );
  };
  
  export default Button;
  