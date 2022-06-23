import cx from "clsx";

import { Layout } from "../components/layout";
import { Reveal } from "../components/reveal";

export default function GridDemo() {
  return (
    <Layout version="grid">
      <div className="mx-auto my-16 grid max-w-6xl grid-cols-4 gap-8">
        {elements.map((element) => (
          <Reveal key={element}>
            <div
              className={cx(
                "relative flex aspect-video w-full items-center justify-center bg-gradient-to-b font-bold text-white",
                colors[element % 4]
              )}
            >
              <div className="text-3xl">{element}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </Layout>
  );
}

const elements = Array.from(Array(104).keys());
const colors = [
  "from-red-400 to-red-600",
  "from-blue-400 to-blue-600",
  "from-green-400 to-green-600",
  "from-yellow-400 to-yellow-600",
];
