import SkeletonCard from "@/section/client/components/skeleton-card";
import React from "react";

export default function LoadingPage() {
  return (
    <div className="flex flex-col w-full">
      <div className="grid grid-cols-5 gap-6">
        {[...new Array(15)]?.map((item, key) => (
          <SkeletonCard key={key} />
        ))}
      </div>
    </div>
  );
}
