import type { NextPage } from 'next';
import Layout from '../components/Layout';
import useDocument from '../hooks/useDocument';

const Home: NextPage = () => {
  const { doc, handleFileSelect, ref } = useDocument();

  return (
    <Layout title="Home Page">
      <div className="flex flex-col gap-8 ">
        <h1>Document File to HTML</h1>
        <input type="file" onChange={handleFileSelect} />
        <div
          ref={ref}
          className="prose prose-strong:text-2xl max-w-none prose-a:text-blue-500 hover:prose-a:text-blue-600"
        >
          {doc}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
