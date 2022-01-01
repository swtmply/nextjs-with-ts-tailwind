import type { NextPage } from 'next';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <div className="text-center">
        <h2 className="font-bold text-4xl mb-2">Hello, Allen 👋</h2>
        <p>NextJS using Typescript with TailwindCSS Boilerplate</p>
      </div>
    </Layout>
  );
};

export default Home;
