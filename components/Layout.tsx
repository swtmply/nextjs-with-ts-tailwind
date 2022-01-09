import Head from 'next/head';
import React, { PropsWithChildren } from 'react';

export default function Layout({
  children,
  title,
}: PropsWithChildren<{ title?: string }>) {
  return (
    <div className="bg-slate-50 grid place-items-center">
      <Head>
        <title>{title || NextJS Typescript with TailwindCSS 3.0}</title>
      </Head>

      <div className="w-[800px] bg-slate-100 min-h-screen p-4">
        <header>
          <nav>{/* TODO Nav Links */}</nav>
        </header>

        <main>{children}</main>

        <footer>
          {/* <hr /> */}
          {/* TODO Footer Content */}
        </footer>
      </div>
    </div>
  );
}
