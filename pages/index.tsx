import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage<{ data: any }> = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Thumnnails:</h1>
      <code>
        {data.map(
          (
            item: { href: string; rel: string; render: 'string' },
            index: number
          ) => (
            <div key={index}>
              {/* eslint-disable-next-line */}
              <img
                src={item.href}
                alt="Thumbnail"
                style={{ width: '200px', height: 'auto' }}
              />
            </div>
          )
        )}
      </code>
    </div>
  );
};

export async function getStaticProps<GetStaticProps>() {
  const response = await fetch('http://localhost:3000/api/thumbs');
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;