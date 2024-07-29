// ProductCatalog.jsx
import React, { useState, useEffect } from 'react';
import products from './Products';
import './Catalog.css';
import CartSidebar from './Cart';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(2000);
    const [searchTerm, setSearchTerm] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
        setIsLoggedIn(loggedIn);
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategories(prevCategories =>
            prevCategories.includes(category)
                ? prevCategories.filter(cat => cat !== category)
                : [...prevCategories, category]
        );
    };

    const handlePriceChange = (event, type) => {
        const value = event.target.value;
        if (type === 'min') {
            setMinPrice(value);
        } else {
            setMaxPrice(value);
        }
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleAddToCart = (product) => {
        if (isLoggedIn) {
            setCartItems([...cartItems, product]);
        } else {
            alert('Please log in to add items to the cart.');
        }
    };

    const handleBuy = () => {
        setCartItems([]);
        alert('Thank you for your purchase!');
    };

    const handleRemoveItem = (index) => {
        setCartItems(cartItems.filter((_, i) => i !== index));
    };

    const filteredProducts = products.filter(product =>
        (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
        product.price >= minPrice &&
        product.price <= maxPrice &&
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="catalog-container">
            <aside className="filter-sidebar">
                <h2>Filters</h2>
                <div className="filter-category">
                    <h3>Category</h3>
                    <ul>
                        {['PC', 'Monitor', 'RAM', 'Graphics Card', 'Storage', 'Keyboard', 'Mouse', 'PC Case', 'Laptop', 'Cooling', 'Power Supply', 'Motherboard', 'Chair'].map(category => (
                            <li key={category}>
                                <label>
                                    <input
                                        type="checkbox"
                                        value={category}
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => handleCategoryChange(category)}
                                    />
                                    <span></span>
                                    {category}
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="filter-price">
                    <h3>Price</h3>
                    <div>
                        <label>Min: </label>
                        <input 
                            type="number" 
                            value={minPrice} 
                            onChange={(e) => handlePriceChange(e, 'min')} 
                        />
                    </div>
                    <div>
                        <label>Max: </label>
                        <input 
                            type="number" 
                            value={maxPrice} 
                            onChange={(e) => handlePriceChange(e, 'max')} 
                        />
                    </div>
                </div>
                <div className="filter-search">
                    <h3>Search</h3>
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                        placeholder="Search products..."
                    />
                </div>
            </aside>
            <main className="product-list">
                {filteredProducts.map(product => (
                    <div className="product-card" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <div className="product-card-buttons">
                            <button onClick={() => handleAddToCart(product)}>
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </main>
            <CartSidebar cartItems={cartItems} onBuy={handleBuy} isLoggedIn={isLoggedIn}  onRemove={handleRemoveItem} />
        </div>
    );
};

export default ProductCatalog;
