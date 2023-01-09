import React, { useCallback } from 'react'
import styles from './styles.module.css'
import { ProductType } from '../types';
import { FaPlus, FaMinus } from 'react-icons/fa';

type OrderType = {
  data: ProductType[];
  onChange: (elements : ProductType[]) => void;
}

const OrderType = ({ data, onChange } : OrderType) => {
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
    <div className={styles.order}>
      <FaMinus onClick={() => onOrder('asc')}/>
      <FaPlus onClick={() => onOrder('desc')} />
    </div>
  );
};

export default OrderType;