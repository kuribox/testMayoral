import { InferGetStaticPropsType, GetStaticProps } from "next";
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ProductList from '../components/ProductList/index';
import { ProductType } from '../components/ProductList/types';
import productsJson from '../products.json';

export const getStaticProps: GetStaticProps<{ products: ProductType[] }> = () => {
  const products: ProductType[] = productsJson || []

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