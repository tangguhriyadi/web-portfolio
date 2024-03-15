"use client";

import React, { useMemo, useState } from "react";
import { projectData } from "@/lib/data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";
import ProjectCard from "@/components/ProjectCard";
import { flattenArray } from "@/lib/utils";

const categories = projectData.map((category) => category.categories);

const flattenCategory = flattenArray(categories);

const uniqueCategories = ["all stacks", ...new Set(flattenCategory)];
const page = () => {
  const [categories, setCategories] = useState<string[]>(uniqueCategories);
  const [category, setCategory] = useState<string>("all stacks");
  const filteredProjects = useMemo(() => {
    return projectData.filter((project) => {
      return category === "all stacks"
        ? project
        : project.categories.includes(category);
    });
  }, [category, projectData]);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[720px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => (
              <TabsTrigger
                onClick={() => setCategory(category)}
                value={category}
                key={index}
                className="capitalize w-[162px] md:w-auto"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => (
              <TabsContent key={index} value={category}>
                <ProjectCard project={project} isGrid />
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default page;
