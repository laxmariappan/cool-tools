import React from "react";
import Head from 'next/head'
import { getAllData,getDataByTag } from "../lib/data";
import Header from '../components/Header';
import Tool from '../components/tool';
export default function TagData({data,tag}) {
  const {tools, error, message} = data
  return (
    <>
    <Header/>
    <div className="flex flex-col   py-2 bg-gray-100">
      <Head>
        <title>Tools tagged with {tag}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-4 py-12 mx-auto max-w-7xl min-h-screen">
  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      {error && 
      <div className="p-5 bg-red-200">{message}</div>
      }
      {tools && tools.map(function(item){
        return(
          <div key={item.id} className="relative p-5 h-48 min-h-0 hover:shadow bg-white rounded">
           <Tool item={item} />
      </div>
        )
      })
      }
    
    
    <div>
    </div>
  </div>
</section>

      
      
      
    </div>
    </>
  )
}

export async function getStaticPaths() {
  const result = await getAllData();
    // Get the paths we want to pre-render based on posts
    const paths = result.tools.map((tool) => ({
      params: { tag: tool.properties.Tags.multi_select[0].name },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
  }

export async function getStaticProps(context) {
  const { tag } = context.params;
  const result = await getDataByTag(tag);
  return {
    props: {
      data: result,
      tag:tag,
    },
    revalidate: 10,
  };
}