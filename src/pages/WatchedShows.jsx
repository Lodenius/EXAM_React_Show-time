import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";

function Cart() {
    const [cart, setCart] = useState([]);
    const state = useSelector((state) => state);

    useEffect(() => {
        setCart(state.cart);
    }, [state]);

    return (
        <main>
            <p>CART</p>
            {
                cart && cart.map((cartItem, i) =>
                    <CartItem cartItem={cartItem} key={i} />)
            }
        </main>
    );
}

export default Cart;