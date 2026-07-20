import CheckoutModal from "./components/CheckoutModal.jsx";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/cart.jsx";
import { CartContextProvider } from "./store/Cart-Context.jsx";
import { UserProgressContextProvider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart /> 
        <CheckoutModal />
      </CartContextProvider>
    </UserProgressContextProvider>    
  );
}

export default App;
