import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from './index';

const testProducts = [
  {"id":2,"name":"Beef - Chuck, Boneless","value":1461.87,"discount":16,"discountValue":1227.9708,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
  {"id":3,"name":"Schnappes Peppermint - Walker","value":541.67,"discount":21,"discountValue":427.9193,"image":"http://dummyimage.com/500x500.png","colors":["red", "pink"]},
  {"id":4,"name":"Beef Crumbs - Panko","value":1945.12,"discount":14,"discountValue":1672.8032,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
];

describe("<Search />", () => {
  test('renders search component', async () => {
    const onChange = jest.fn();

    const { getByTestId } = render(<Search data={testProducts} onChange={onChange} />);

    const searchElement = getByTestId('search');
    expect(searchElement).toBeInTheDocument();
  });

  test('onChange should be called with the correct elements when search input is "be"', () => {
    const onChange = jest.fn();

    const { getByPlaceholderText } = render(
      <Search data={testProducts} onChange={onChange} />
    );

    const input = getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'be' } });

    expect(onChange).toHaveBeenCalledWith([
      {"id":2,"name":"Beef - Chuck, Boneless","value":1461.87,"discount":16,"discountValue":1227.9708,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
      {"id":4,"name":"Beef Crumbs - Panko","value":1945.12,"discount":14,"discountValue":1672.8032,"image":"http://dummyimage.com/500x500.png","colors":["red"]},
    ]);
  });

  test('onChange should be called with the correct elements when search input is "be"', () => {
    const onChange = jest.fn();

    const { getByPlaceholderText } = render(
      <Search data={testProducts} onChange={onChange} />
    );

    const input = getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'nada' } });

    expect(onChange).toHaveBeenCalledWith([]);
  });
});