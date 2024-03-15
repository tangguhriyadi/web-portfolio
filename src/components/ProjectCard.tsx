import Image, { StaticImageData } from "next/image";
import React from "react";
import { Card, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { Link2Icon } from "lucide-react";
import { ProjectType } from "@/lib/type";
import { RiGithubFill } from "react-icons/ri";
import { cn } from "../lib/utils";

interface ProjectCardProps {
  project: ProjectType;
  isGrid?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  isGrid = false,
}) => {
  return (
    <Card
      className={cn(
        "group overflow-hidden relative",
        isGrid && "min-h-[465px]",
      )}
    >
      <CardHeader className="p-0">
        <div className="relative w-full h-[300px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
          <Image
            className="absolute bottom-0 shadow-2xl max-h-[250px]"
            src={project.image}
            width={247}
            height={250}
            alt="project"
            priority
          />
          <div className="flex justify-center items-center gap-x-2">
            {project.link && (
              <Link
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                href={project.link}
                target="_blank"
              >
                <Link2Icon className="text-white" />
              </Link>
            )}
            {project.github && (
              <Link
                className="bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                href={project.github}
                target="_blank"
              >
                <RiGithubFill className="text-white" />
              </Link>
            )}
          </div>
        </div>
      </CardHeader>
      <div className="h-full px-8 py-6">
        <div className="absolute top-4 left-5 flex gap-x-2">
          {project.categories.map((category, index) => (
            <Badge
              key={index}
              className="uppercase text-sm font-medium mb-2 "
            >
              {category}
            </Badge>
          ))}
        </div>
        <h4 className="h4 mb-1">{project.name}</h4>
        <p className="text-muted-foreground text-lg">{project.description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
