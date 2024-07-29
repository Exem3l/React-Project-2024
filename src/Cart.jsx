import React from 'react';
import './Catalog.css';

const CartSidebar = ({ cartItems, onBuy, isLoggedIn, onRemove }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <aside className="cart-sidebar">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price.toFixed(2)}
                            <button onClick={() => onRemove(index)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M3 6h18v2H3V6zm2 4h14v12H5V10zm7-7c.55 0 1 .45 1 1v1h4v2H7V5h4V4c0-.55.45-1 1-1z"/>
                                </svg>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
            <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
            <button className="buy-button" onClick={onBuy} disabled={!isLoggedIn}>
                Buy
            </button>
        </aside>
    );
};

export default CartSidebar;
