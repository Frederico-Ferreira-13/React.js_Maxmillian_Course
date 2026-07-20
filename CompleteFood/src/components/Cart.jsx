import { useContext } from "react";
import CartModal from "./UI/CartModal";
import CartItem from "./CartItem";

import CartContext from "../store/Cart-Context";
import UserProgressContext from "../store/UserProgressContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx =  useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function handleGoToCheckout() {
        userProgressCtx.showCheckout();
    }

    return (
        <CartModal 
            className="cart" 
            open={userProgressCtx.progress === 'cart'} 
            onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
        >
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map(item => (
                <CartItem 
                    key={item.id} 
                    name={item.name} 
                    quantity={item.quantity} 
                    price={item.price}
                    onIncrease={() => cartCtx.addItem(item)}
                    onDecrease={() => cartCtx.removeItem(item.id)}
                />
            ))}
            </ul>
            
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p>
                <Button textOnly onClick={handleCloseCart}>
                    Close
                </Button>
                {cartCtx.items.length > 0 && (
                    <Button onClick={handleGoToCheckout}>Go to checkout</Button>
                )}
            </p>
        </CartModal>
    );
}