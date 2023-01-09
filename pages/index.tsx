import { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList/index';
import productsJson from '../products.json';

type Products = {
  id: Number;
  name: String;
  value: Number;
  discount: Number;
  discountValue: Number;
  image: String;
  colors: String[];
}

export const getStaticProps: GetStaticProps<{ products: Products[] }> = () => {
  const products: Products[] = productsJson || []

  return {
    props: {
      products,
    },
  }
}

const HomePage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <>
    <Head>
      <title>Test Mayoral</title>
    </Head>
    <main className={styles.main}>
      <ProductList products={products} />
    </main>
  </>;
};

export default HomePage;