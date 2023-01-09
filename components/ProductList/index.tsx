import React, { useState } from 'react'
import styles from './styles.module.css'
import Product from './Product/index';
import Search from './Search/index';
import Order from './Order/index';
import { ProductType } from './types';

type ProductsList = {
  products: ProductType[];
}

const ProductList = ({ products } : ProductsList) => {
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>(products);

  return (
    <>
      <div className={styles.productControls}>
        <Search 
          data={products}
          onChange={(elements : ProductType[]) => setFilteredProducts(elements)}
        />

        <Order 
          data={filteredProducts}
          onChange={(elements : ProductType[]) => setFilteredProducts([...elements])}
        />
      </div>

      <div className={styles.productListContainer}>
        <div className={styles.productList}>
          <>
            {
              filteredProducts.map((product) => (
                <Product key={String(product.id)} data={product} />
              ))
            }
          </>
        </div>
      </div>
    </>
  );
};

export default ProductList;