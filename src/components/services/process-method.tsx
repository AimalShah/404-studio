import { Heading } from "./intro";

export const STEPS = [
  {
    id: 1,
    title: "Discover",
    desc: "We uncover what drives your brand through purpose clarity audience insight and business focus.",
  },
  {
    id: 2,
    title: "Request",
    desc: "We analyze your market understand your competitors and identify where you can stand out.",
  },
  {
    id: 3,
    title: "Create",
    desc: "We design a distinct identity using voice visuals and story to build emotional connection",
  },
  {
    id: 4,
    title: "Activate",
    desc: "We launch your brand across all channels creating a consistent experience that grows with you.",
  },
];

export default function ProcessMethod() {
  return (
    <div className="w-full">
      <Heading text="Our Process, Explained" />
      <div className="w-full">
        <h1 className="text-2xl lg:text-5xl lg:mt-4 text-center mt-2 font-medium">
          Here's how it works
        </h1>
        <div className="lg:w-7xl mx-auto px-4 mt-8 flex flex-col lg:flex-row md:flex-row lg:gap-4 lg:items-start lg:h-[75vh]">
          {STEPS.map((item, index) => (
            <Card
              number={item.id}
              title={item.title}
              description={item.desc}
              className={
                item.id % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-20"
              }
            />
          ))}{" "}
        </div>
      </div>
    </div>
  );
}

function Card({
  number,
  title,
  description,
  className = "",
}: {
  number: number;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`lg:w-full bg-gray-400/20 p-2 rounded-2xl mb-4 lg:h-96 ${className}`}
    >
      <div className="w-full bg-white h-full rounded-2xl py-2 px-6 shadow-2xl flex flex-col gap-4">
        <span className="text-4xl lg:text-6xl lg:font-normal font-semibold lg:mb-32">
          {number}
        </span>
        <span className="text-xl font-semibold">{title}</span>
        <p className="font-light text-gray-400">{description}</p>
      </div>
    </div>
  );
}
