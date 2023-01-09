import React from 'react'
import styles from './styles.module.css'
import Product from '../Product/index';

type Products = {
  id: Number;
  name: String;
  value: Number;
  discount: Number;
  discountValue: Number;
  image: String;
  colors: String[];
}

type ProductsList = {
  products: Products[];
}

const ProductList = ({ products } : ProductsList) => {
  return (
    <div className={styles.productList}>
      {
        products.map((product) => (
          <Product key={String(product.id)} data={product} />
        ))
      }
    </div>
  );
};

export default ProductList;