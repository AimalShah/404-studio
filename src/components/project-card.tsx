export default function ProjectCard({
  src,
  title,
  category,
}: {
  src: string;
  title: string;
  category: string;
}) {
  return (
    <div className="lg:w-[630px] bg-transparent">
      <div className="lg:h-[560] lg:w-[620px] overflow-hidden rounded-2xl bg-transparent">
        <img
          src={src}
          className="w-full h-full hover:scale-111 transition-all"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <h1 className="text-lg text-gray-600 hover:text-black">{title}</h1>
        <span className="bg-white rounded-2xl py-1 px-2  text-xs text-gray-600 font-semibold">
          {category}
        </span>
      </div>
    </div>
  );
}
