import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import './Home.css';
import Products from '../Products/Products';
import PreLoader from '../PreLoader/PreLoader';

const Home = () => {
    document.title = 'FoodBasket.Com - #1 Grocery Shop in Bangladesh!';
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(product => setProducts(product))
    }, [])
    return (
        <div>
            <div className="container">
                <div className="Search">
                    <h3>Search for Products</h3>
                    <input type="text" placeholder="Search" />
                    <input type="submit" value="Search" />
                </div>
                <div className="Products">
                    {
                        products.length === 0 && <PreLoader />
                    }
                    {
                        products.map(product => <Products key={product._id} product={product}></Products>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;