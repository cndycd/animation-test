import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

export const Layout = ({ version, children }) => {
  const router = useRouter();

  const handleReload = () => {
    router.reload(window.location.pathname);
  };

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
      <div className="fixed right-0 bottom-0 space-x-4 p-4">
        <button onClick={handleScrollToTop}>top</button>
        <button onClick={handleReload}>refresh</button>
      </div>
    </>
  );
};

const handleScrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
