import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import { AuthProvider } from "./Context/AuthContext";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <CartProvider>
          <Navbar />
          <Body />
        </CartProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
