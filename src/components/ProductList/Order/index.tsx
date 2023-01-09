import React, { useCallback } from 'react'
import styles from './styles.module.css'
import { ProductType } from '../types';
import { FaPlus, FaMinus } from 'react-icons/fa';

type OrderType = {
  data: ProductType[];
  onChange: (elements : ProductType[]) => void;
}

const Order = ({ data, onChange } : OrderType) => {
  const onOrder = useCallback((order : string) : void => {
    onChange(data.sort((a: ProductType, b: ProductType) => {
      if (order === 'asc') {
        return a.discountValue - b.discountValue;
      } else {
        return b.discountValue - a.discountValue;
      }
    }));
  }, [data, onChange]);

  return (
    <div className={styles.order} data-testid="order">
      <FaMinus data-testid="asc" onClick={() => onOrder('asc')}/>
      <FaPlus data-testid="desc" onClick={() => onOrder('desc')} />
    </div>
  );
};

export default Order;