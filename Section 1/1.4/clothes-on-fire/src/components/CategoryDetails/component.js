import React from 'react';
import DisplayProductContainer from '../../containers/DisplayProductContainer';
import './styles.css';
import CATEGORIES from '../../data/categories';

function CategoryDetails(props) {
    const categoryId = props.match.params.id;
    const category = CATEGORIES.find(category => category.id === categoryId);

    return (
        <div className="CategoryDetails">
            {category.products.map((product, index) => (
                <DisplayProductContainer product={product} key={index} />
            ))}
        </div>
    );
}

export default CategoryDetails;