import SkeletonCard from "@/section/client/components/skeleton-card";
import React from "react";

export default function LoadingPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 md:gap-6">
        {[...new Array(25)]?.map((item, key) => (
          <SkeletonCard key={key} />
        ))}
      </div>
    </div>
  );
}
