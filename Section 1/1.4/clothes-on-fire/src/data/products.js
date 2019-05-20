import MenTShirtImage from '../images/products/men-t-shirt.jpg';
import MenSunglassesImage from '../images/products/men-sunglasses.jpg';
import LadiesTShirtImage from '../images/products/ladies-t-shirt.jpg';

const PRODUCTS = [
    {
        id: 'men-t-shirt',
        name: "Men's T-Shirt",
        price: 75.00,
        image: MenTShirtImage
    },
    {
        id: 'men-sunglasses',
        name: "Men's Sunglasses",
        price: 60.00,
        image: MenSunglassesImage
    },
    {
        id: 'ladies-t-shirt',
        name: "Ladies T-Shirt",
        price: 50.00,
        image: LadiesTShirtImage
    }
];

export function getProductById(id) {
    return PRODUCTS.find(p => p.id === id);
};

export default PRODUCTS;