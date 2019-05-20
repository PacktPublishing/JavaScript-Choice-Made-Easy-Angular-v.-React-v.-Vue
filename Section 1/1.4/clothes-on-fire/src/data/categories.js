import MenImage from '../images/categories/men.jpg';
import LadiesImage from '../images/categories/ladies.jpg';
import { getProductById } from './products';

const CATEGORIES = [
    {
        id: 'men-fashion',
        name: "Men's Fashion",
        image: MenImage,
        imageStyle: {
            marginTop: '-250px'
        },
        titleStyle: {
            right: '17%'
        },
        products: [
            getProductById('men-t-shirt'),
            getProductById('men-sunglasses')
        ]
    },
    {
        id: 'ladies-fashion',
        name: 'Ladies Fashion',
        image: LadiesImage,
        imageStyle: {
            marginTop: '-240px'
        },
        titleStyle: {
            left: '17%'
        },
        products: [
            getProductById('ladies-t-shirt')
        ]
    }
];

export default CATEGORIES;