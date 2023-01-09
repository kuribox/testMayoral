import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Order from './index';

const testProducts = [
  {"id":2,"name":"Beef - Chuck, Boneless","value":1461.87,"discount":16,"discountValue":1227.9708,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
  {"id":3,"name":"Schnappes Peppermint - Walker","value":541.67,"discount":21,"discountValue":427.9193,"image":"http://dummyimage.com/500x500.png","colors":["red", "pink"]},
  {"id":4,"name":"Beef Crumbs - Panko","value":1945.12,"discount":14,"discountValue":1672.8032,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
];

describe("<Order />", () => {
  test('renders search component', async () => {
    const onChange = jest.fn();

    const { getByTestId } = render(<Order data={testProducts} onChange={onChange} />);

    const searchElement = getByTestId('order');
    expect(searchElement).toBeInTheDocument();
  });

  test('onChange should be called with the correct elements when sort asc', () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <Order data={testProducts} onChange={onChange} />
    );

    const asc = getByTestId('asc');
    fireEvent.click(asc);

    expect(onChange).toHaveBeenCalledWith([
      {"id":3,"name":"Schnappes Peppermint - Walker","value":541.67,"discount":21,"discountValue":427.9193,"image":"http://dummyimage.com/500x500.png","colors":["red", "pink"]},
      {"id":2,"name":"Beef - Chuck, Boneless","value":1461.87,"discount":16,"discountValue":1227.9708,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
      {"id":4,"name":"Beef Crumbs - Panko","value":1945.12,"discount":14,"discountValue":1672.8032,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
    ]);
  });

  test('onChange should be called with the correct elements when sort desc', () => {
    const onChange = jest.fn();

    const { getByTestId } = render(
      <Order data={testProducts} onChange={onChange} />
    );

    const desc = getByTestId('desc');
    fireEvent.click(desc);

    expect(onChange).toHaveBeenCalledWith([
      {"id":4,"name":"Beef Crumbs - Panko","value":1945.12,"discount":14,"discountValue":1672.8032,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
      {"id":2,"name":"Beef - Chuck, Boneless","value":1461.87,"discount":16,"discountValue":1227.9708,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
      {"id":3,"name":"Schnappes Peppermint - Walker","value":541.67,"discount":21,"discountValue":427.9193,"image":"http://dummyimage.com/500x500.png","colors":["red", "pink"]},
    ]);
  });
  
});