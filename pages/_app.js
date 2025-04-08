import { ThemeProvider } from "../context/ThemeContext";
import { CartProvider } from "../context/CartContext"; 
import ThemeToggle from "../components/ThemeToggle"; 
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    
    <ThemeProvider>
      <CartProvider>
      
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all">
        <header>
          <ThemeToggle /> 
          <Toaster position="top-center" />
        </header>
        <Component {...pageProps} />
        </div>
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
