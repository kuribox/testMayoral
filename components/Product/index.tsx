import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import c from 'classnames';
import ComponentsStyles from 'styles/Components.module.css';
import styles from './styles.module.css';
import colors from './colors.json';

type ProductDataType = {
  id: Number;
  name: String;
  value: Number;
  discount: Number;
  discountValue: Number;
  image: String;
  colors: String[];
}

type ProductType = {
  data: ProductDataType;
}

const Product = ({ data } : ProductType) => {
  const [color, setColor] = useState(data.colors[0]);
  const [showColors, setShowColors] = useState(false);

  const getColor = useCallback((color: String) => {
    return colors.find(e => e.name.toLowerCase() === color.toLowerCase())?.hex.slice(1) || 'ffffff';
  }, []);

  const onAdd = useCallback(() => {
      // TODO: Add to cart
  }, [ data ]);

  return (
    <div key={String(data.id)} className={c(ComponentsStyles.card, styles.product)}>
      <div className={styles.productImage}>
        <Image
          src={`${data.image}/${getColor(color)}/ffffff`}
          alt={`Picture of ${data.name}`}
          width={500}
          height={500}
        />
      </div>
      <h1 className={styles.productTitle}>{data.name}</h1>
      <span className={styles.productValue}>{String(data.value.toFixed(2))}</span>

      {
        data.discount > 0 && (
          <div className={styles.productDiscount}>
            <span>{`${String(data.discountValue.toFixed(2))}€`}</span>
            <span>{`(${String(data.discount)}%)`}</span>
          </div>
        )
      }

      {
        data.colors.length > 1 && (
          <div
            className={styles.productColors}
            onClick={() => setShowColors(!showColors)}
          >
            { !showColors ? "Más colores" : 'Oculular colores' }
          </div>
        )
      }

      {
        showColors && (
          <div>
            {
              data.colors.map(color => (
                <div
                  key={String(color)}
                  className={styles.productColor}
                  onClick={() => setColor(color)}
                  style={{
                    backgroundColor: `#${getColor(color)}`,
                  }}
                />
              ))
            }
          </div>
        )
      }
      
      <input type="button" value="AÑADIR" onClick={onAdd} />
    </div>
  );
};

export default Product;