import Image from "next/image";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Link2Icon } from "lucide-react";
import { ArticleType } from "@/lib/type";
import { cn, formatDate } from "../lib/utils";

interface ArticleCardProps {
  article: ArticleType;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <Link href={article.link} target="_blank">
      <Card className={cn("group overflow-hidden relative cursor-pointer")}>
        <CardHeader className="p-0">
          <div className="relative w-full h-[275px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-no-repeat overflow-hidden">
            <Image
              className="absolute bottom-0 shadow-2xl max-h-[250px]"
              src={article.image}
              width={247}
              height={250}
              alt="article"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </CardHeader>
        <div
          style={{ display: "-webkit-box", WebkitBoxOrient: "vertical" }}
          className="h-full px-8 py-4 overflow-hidden"
        >
          <h4
            className="h4 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              textOverflow: "ellipsis",
            }}
          >
            {article.title}
          </h4>
        </div>
        <div className="px-8 py-2 flex justify-start gap-x-6">
          <Image
            src="/self.jpg"
            alt="self"
            width={54}
            height={54}
            priority
            className="rounded-full border border-neutral-500 h-[54px] w-[54px]"
          />

          <div className="flex flex-col gap-y-1">
            <CardTitle>Muhammad Tangguh Riyadi</CardTitle>
            <CardDescription className="flex gap-x-1 text-base items-center">
              <span>{article.duration} min read</span>
              <span className="bg-neutral-500 rounded-full w-1 h-1 m-1"></span>
              <span>{formatDate(article.published_at)}</span>
            </CardDescription>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ArticleCard;
