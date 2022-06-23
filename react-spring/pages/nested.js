import Head from "next/head";
import cx from "clsx";

import { Layout } from "../components/layout";
import { Reveal } from "../components/reveal";

export default function NestedDemo() {
  return (
    <Layout version="nested">
      <div className="mx-auto my-16 flex max-w-5xl flex-col space-y-16">
        {elements.map((element) => (
          <Reveal key={element}>
            <div
              className={cx(
                "relative flex aspect-video w-full items-center justify-center  bg-gradient-to-b font-bold text-white",
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
    </Layout>
  );
}

const elements = Array.from(Array(52).keys());
const colors = [
  "from-red-400 to-red-600",
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-yellow-400 to-yellow-600",
];
