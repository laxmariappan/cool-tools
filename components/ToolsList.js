import Tool from "./tool";
import Skeleton from "./skeleton";
const ToolsList = ({ tools, error, isLoadingMore, loadMore, reachedEnd }) => {
  const renderTools = () => {
    if (error) {
      return <p>There was an error while fetching the tools...</p>;
    }

    if (!tools) {
      return <p>It&apos;s looking a bit empty here...</p>;
    }

    return tools.map((tool) => {
      return (
        <div
          key={tool.id}
          className="relative px-5 py-3 h-48 min-h-0 hover:shadow bg-white rounded"
        >
          <Tool item={tool} />
        </div>
      );
    });
  };

  return (
    <>
      {renderTools()}
      {isLoadingMore && (
        <>
          <div className="relative p-5 h-48 min-h-0 hover:shadow bg-white rounded">
            <Skeleton />
          </div>
          <div className="relative p-5 h-48 min-h-0 hover:shadow bg-white rounded invisible md:visible">
            <Skeleton />
          </div>
          <div className="relative p-5 h-48 min-h-0 hover:shadow bg-white rounded invisible md:visible">
            <Skeleton />
          </div>
          <div className="relative p-5 h-48 min-h-0 hover:shadow bg-white rounded invisible md:visible">
            <Skeleton />
          </div>
        </>
      )}

      {loadMore && !reachedEnd && (
        <div className="clear-both">
          <button
            className="bg-purple-600 text-white p-2 rounded"
            onClick={loadMore}
            disabled={isLoadingMore}
          >
            {isLoadingMore ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </>
  );
};

export default ToolsList;
