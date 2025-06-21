import React from "react";

const DashboardLoader = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Shimmer */}
      <div className="h-16 w-full animate-pulse bg-gray-200 shadow-md"></div>

      <div className="flex flex-1">
        {/* Sidebar Shimmer */}
        <div className="w-64 animate-pulse space-y-4 bg-gray-200 p-4">
          <div className="h-6 rounded bg-gray-300"></div>
          <div className="h-6 w-3/4 rounded bg-gray-300"></div>
          <div className="h-6 w-2/3 rounded bg-gray-300"></div>
          <div className="h-6 w-4/5 rounded bg-gray-300"></div>
        </div>

        {/* Main Content Shimmer */}
        <div className="flex-1 animate-pulse space-y-6 p-6">
          <div className="h-8 w-1/3 rounded bg-gray-300"></div>
          <div className="h-4 w-full rounded bg-gray-300"></div>
          <div className="h-4 w-full rounded bg-gray-300"></div>
          <div className="h-4 w-5/6 rounded bg-gray-300"></div>
          <div className="h-4 w-2/3 rounded bg-gray-300"></div>
          <div className="h-4 w-3/4 rounded bg-gray-300"></div>
        </div>
      </div>

      {/* Footer Shimmer */}
      <div className="mt-auto h-12 w-full animate-pulse bg-gray-200 shadow-inner"></div>
    </div>
  );
};

export default DashboardLoader;
