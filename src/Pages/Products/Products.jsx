import { Link } from 'react-router-dom';
import './products.css'

function Products () {
    return (
        <ul className='table'> 
            <Link to={'/product/1'} className='table_item'>
                <h3>Product</h3>
                <p>name</p>
                <p>Price</p>
            </Link>
            <Link to={'/product/2'} className='table_item'>
                <h3>Product</h3>
                <p>name</p>
                <p>Price</p>
            </Link>
            <Link to={'/product/3'} className='table_item'>
                <h3>Product</h3>
                <p>name</p>
                <p>Price</p>
            </Link>
            <Link to={'/product/4'} className='table_item'>
                <h3>Product</h3>
                <p>name</p>
                <p>Price</p>
            </Link>
            <Link to={'/product/5'} className='table_item'>
                <h3>Product</h3>
                <p>name</p>
                <p>Price</p>
            </Link>
            <Link to={'/product/6'} className='table_item'>
                <h3>Product</h3>
                <p>name</p>
                <p>Price</p>
            </Link>
        </ul>
    )
}

export default Products;