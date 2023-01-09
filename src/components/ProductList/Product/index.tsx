import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import c from 'classnames';
import ComponentsStyles from 'styles/Components.module.css';
import styles from './styles.module.css';
import colors from './colors.json';
import { ProductType } from '../types';

type ProductComponentType = {
  data: ProductType;
}

const  Product = ({ data } : ProductComponentType) => {
  const [color, setColor] = useState<string>(data ? data.colors[0] : '');
  const [showColors, setShowColors] = useState<boolean>(false);

  const getColor = useCallback((color: string) : string => {
    return colors.find(e => e.name.toLowerCase() === color.toLowerCase())?.hex.slice(1) || 'ffffff';
  }, []);

  const onAdd = useCallback(() : void => {
      // TODO: Add to cart
  }, [ data, color ]);

  return (
    <div className={c(ComponentsStyles.card, styles.product)}  data-testid={`product-${data.id}`}>
      <div className={styles.productImage}>
        <Image
          src={`${data.image}/${getColor(color)}/ffffff`}
          alt={`Picture of ${data.name}`}
          width={500}
          height={500}
        />
      </div>
      <div className={styles.productTitle}>{data.name}</div>
      <span className={c(styles.productValue, data.discount > 0 && styles.haveDiscount)}>
        {`${String(data.value.toFixed(2))} €`}
      </span>

      {
        data.discount > 0 && (
          <div className={styles.productDiscount}>
            <span>
              {`${String(data.discountValue.toFixed(2))} €`}
            </span>
            <span>{` (${String(data.discount)}%)`}</span>
          </div>
        )
      }

      {
        data.colors.length > 1 ? (
          <div
            className={styles.productColors}
            onClick={() => setShowColors(!showColors)}
          >
            { !showColors ? "Más colores" : (
              <div className={styles.productColorsList}>
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
            )}
          </div>
        ) : (
          <div className={styles.productColorsEmpty} />
        )
      }
      <input type="button" value="AÑADIR" onClick={onAdd} />
    </div>
  );
};

export default Product;