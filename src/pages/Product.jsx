import React from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
    const {id}=useParams()
    return (
        <>
            <h1>Sản Phẩm</h1>
            Id={id}
        </>
    );
};

export default Product;