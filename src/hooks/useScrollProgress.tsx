"use client";
import React, { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeigth = document.body.scrollHeight - window.innerHeight;

      if (scrollHeigth) {
        const newCompletion = parseFloat(
          Number((currentProgress / scrollHeigth) * 100).toFixed(2),
        );

        setCompletion(newCompletion);
      }
    };
    window.addEventListener("scroll", updateScrollCompletion);

    return () => {
      window.removeEventListener("scroll", updateScrollCompletion);
    };
  }, []);
  return completion;
};

export default useScrollProgress;
