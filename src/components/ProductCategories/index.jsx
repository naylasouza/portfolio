import React from 'react';
import { Fade } from 'react-reveal';
import './index.css';

const categories = [
    { name: "All Product", target: "#all-product" },
    { name: "Interior Design", target: "#interior-design" },
    { name: "Architecture", target: "#architecture" },
    { name: "See All About Us", target: "#about-us" }
];

const ProductCategories = () => {
    return (
        <Fade right>
            <section className="product-categories">
                {categories.map((category, index) => (
                    <a href={category.target} key={index} className="category-link">
                        <div className="category">
                            <h3>{category.name}</h3>
                        </div>
                    </a>
                ))}
            </section>
        </Fade>
    );
};

export default ProductCategories;
