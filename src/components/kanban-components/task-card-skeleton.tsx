export const TaskSkeleton = () => (
    <div className="animate-pulse bg-neutral-900 rounded-lg p-4 mb-3">
      <div className="flex justify-between items-start mb-1">
        <div className="flex items-center gap-2 px-2 rounded-full bg-gray-700 w-24 h-6"></div>
        <div className="w-4 h-4 bg-gray-700 rounded"></div>
      </div>
  
      <div className="h-6 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-full mb-3"></div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div className="h-4 bg-gray-700 rounded w-1/4"></div>
          <div className="h-5 w-5 bg-gray-700 rounded-full"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-700 rounded w-1/3"></div>
          <div className="px-2 py-1 rounded bg-gray-700 w-12 h-6"></div>
        </div>
        <div className="h-1 bg-neutral-800 rounded w-full"></div>
        <div className="flex items-center gap-3">
          <div className="h-4 bg-gray-700 rounded w-1/4"></div>
          <div className="h-4 bg-gray-700 rounded w-1/4"></div>
        </div>
      </div>
    </div>
  );