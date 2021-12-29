import useSWRInfinite from 'swr/infinite'

const fetcher = (url) => fetch(url).then((res) => res.json());

export const usePaginateTools = () => {
  const getKey = (pageIndex, previousPageData) => {
    if (previousPageData && !previousPageData.has_more) {
      return null;
    }

    if (pageIndex === 0) {
      return '/api/tools';
    }

    return `/api/tools?cursor=${previousPageData.next_cursor}`;
  };

  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);

  const normalizeTools = data ? data.map((d) => d.data) : [];
  const tools = normalizeTools ? [].concat(...normalizeTools) : [];

  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined');

  const isEmpty = data?.[0]?.length === 0;
  const reachedEnd =
    isEmpty || (data && data[data.length - 1]?.has_more === false);

  return { tools, error, isLoadingMore, size, setSize, reachedEnd };
};

export const usePaginateToolsByTag = (tag) => {
    const getKey = (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.has_more) {
        return null;
      }
  
      if (pageIndex === 0) {
        return `/api/tag?tag=${tag}`;
      }
  
      return `/api/tag?tag=${tag}&cursor=${previousPageData.next_cursor}`;
    };
  
    const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
  
    const normalizeTools = data ? data.map((d) => d.data) : [];
    const tools = normalizeTools ? [].concat(...normalizeTools) : [];
  
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
      isLoadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === 'undefined');
  
    const isEmpty = data?.[0]?.length === 0;
    const reachedEnd =
      isEmpty || (data && data[data.length - 1]?.has_more === false);
  
    return { tools, error, isLoadingMore, size, setSize, reachedEnd };
  };


  export const usePaginateToolsByQuery = (query) => {
    const getKey = (pageIndex, previousPageData) => {
      if (previousPageData && !previousPageData.has_more) {
        return null;
      }
  
      if (pageIndex === 0) {
        return `/api/search?query=${query}`;
      }
  
      return `/api/search?query=${query}&cursor=${previousPageData.next_cursor}`;
    };
  
    const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher);
  
    const normalizeTools = data ? data.map((d) => d.data) : [];
    const tools = normalizeTools ? [].concat(...normalizeTools) : [];
  
    const isLoadingInitialData = !data && !error;
    const isLoadingMore =
      isLoadingInitialData ||
      (size > 0 && data && typeof data[size - 1] === 'undefined');
  
    const isEmpty = data?.[0]?.length === 0;
    const reachedEnd =
      isEmpty || (data && data[data.length - 1]?.has_more === false);
  
    return { tools, error, isLoadingMore, size, setSize, reachedEnd };
  };
