import Head from "next/head";
import cx from "clsx";

import { Reveal } from "../components/reveal";

export default function Home() {
  return (
    <>
      <Head>
        <title>reveal perf test</title>
      </Head>
      <div className="flex min-h-screen items-center justify-center text-9xl  font-bold">
        reveal perf test
      </div>
      <div className="mx-auto my-16 flex max-w-5xl flex-col space-y-16">
        {elements.map((element) => (
          <Reveal key={element}>
            <div
              className={cx(
                "relative flex aspect-video w-full items-center justify-center  font-bold text-white",
                colors[element % 4]
              )}
            >
              <Reveal className="text-9xl">{element}</Reveal>
              <div className="absolute right-0 bottom-0">
                <Reveal className="p-4 text-5xl">Extra</Reveal>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </>
  );
}

const elements = Array.from(Array(51).keys());
const colors = ["bg-red-500", "bg-blue-500", "bg-green-500", "bg-yellow-500"];
