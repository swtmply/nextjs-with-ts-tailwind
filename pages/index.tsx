import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout title="Home Page">
      <div className="flex flex-col gap-2 items-center">
        <h1 className="font-bold text-3xl">
          NextJS - Typescript Boilerplate with TailwindCSS
        </h1>
        <code className="py-1 px-2 bg-gray-100 rounded">
          Edit <span className="font-bold"> pages/index.tsx </span> to start
          creating your own app.
        </code>
        <p>
          Check out the code at Github:{' '}
          <Link href={'https://github.com/swtmply/nextjs-with-ts-tailwind'}>
            <a className="underline text-blue-500" target="_blank">
              https://github.com/swtmply/nextjs-with-ts-tailwind
            </a>
          </Link>
        </p>
      </div>
    </Layout>
  );
};

export default Home;
