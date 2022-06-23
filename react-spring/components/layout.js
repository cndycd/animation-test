import Link from "next/link";
import Head from "next/head";

export const Layout = ({ version, children }) => {
  return (
    <>
      <Head>
        <title>reveal perf test ({version})</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-6xl">
          <div className="text-8xl">
            <span className="font-bold">reveal perf test </span>
            <span>({version})</span>
          </div>
          <div className="mt-4 space-x-4 text-2xl text-gray-700">
            <Link href="/">standard</Link>
            <Link href="/nested">nested</Link>
            <Link href="/grid">grid</Link>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
