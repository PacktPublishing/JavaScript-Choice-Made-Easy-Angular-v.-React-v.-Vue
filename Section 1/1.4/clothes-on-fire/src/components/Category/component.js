import React from 'react';
import { Link } from 'react-router-dom';

function Category({ category }) {
    return (
        <div className="App-category">
            <img src={category.image} className="App-category-front-image" style={category.imageStyle} alt="" />
            <Link to={`/category/${category.id}`} className="App-category-title" style={category.titleStyle}>{category.name}</Link>
        </div>
    );
}

export default Category;