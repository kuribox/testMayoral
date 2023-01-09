import React from 'react';
import { render } from '@testing-library/react';
import ProductList from "./index";

const testProducts = [
  {"id":2,"name":"Beef - Chuck, Boneless","value":1461.87,"discount":16,"discountValue":1227.9708,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
  {"id":3,"name":"Schnappes Peppermint - Walker","value":541.67,"discount":21,"discountValue":427.9193,"image":"http://dummyimage.com/500x500.png","colors":["red", "pink"]},
  {"id":4,"name":"Bread Crumbs - Panko","value":1945.12,"discount":14,"discountValue":1672.8032,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
]

describe("<ProductList />", () => {
  test('renders search component', async () => {
    const { getByTestId } = await render(<ProductList products={testProducts}/>);
    const searchElement = getByTestId('search');
    expect(searchElement).toBeInTheDocument();
  });

  test('renders order component', async () => {
    const { getByTestId } = await render(<ProductList products={testProducts}/>);
    const orderElement = getByTestId('order');
    expect(orderElement).toBeInTheDocument();
  });

  test('renders products component', async () => {
    const { queryByTestId } = await render(<ProductList products={testProducts}/>);
  
    expect(queryByTestId('product-2')).toBeInTheDocument();
    expect(queryByTestId('product-3')).toBeInTheDocument();
    expect(queryByTestId('product-4')).toBeInTheDocument();
    expect(queryByTestId('product-5')).toBeNull;
  });
});

