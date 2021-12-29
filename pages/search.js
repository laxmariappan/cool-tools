import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { usePaginateToolsByQuery } from "../lib/tools";
import ToolsList from "../components/ToolsList";

export default function Home() {
  const { query } = useRouter();
  console.log(query);
  const { tools, error, isLoadingMore, size, setSize, reachedEnd } =
    usePaginateToolsByQuery(query.query);
  return (
    <>
      <Header />
      <div className="flex flex-col   py-2 bg-gray-100">
        <Head>
          <title>Cool Tools</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="px-4 py-12 mx-auto max-w-7xl min-h-screen">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
            {tools && (
              <ToolsList
                tools={tools}
                error={error}
                isLoadingMore={isLoadingMore}
                loadMore={() => setSize(size + 1)}
                reachedEnd={reachedEnd}
              />
            )}
          </div>
        </section>
      </div>
    </>
  );
}
