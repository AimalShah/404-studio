import { projects } from "@/utils/projects";
import { Heading } from "./services/intro";
import ProjectCard from "./project-card";

export default function ProjectSection() {
  return (
    <div className="">
      <Heading text="Our Projects" />
      <div className="mb-10">
        <div className="lg:w-7xl w-screen mx-auto grid lg:grid-cols-2 mt-10 gap-x-8 gap-y-14 px-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              src={project.src}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
