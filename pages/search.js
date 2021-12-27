import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Header from '../components/Header';
import Tool from "../components/tool";
import { getSearchResults } from "../lib/data";
export default function Search({data,query}) {
  
  const {tools, error, message} = data
  return (
    <>
    <Header/>
    <div className="flex flex-col   py-2 bg-gray-100">
      <Head>
        <title>Search results for {query}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="px-4 py-12 mx-auto max-w-7xl min-h-screen">
          <h2 className="text-2xl mb-5">Search results for <span className="text-purple-600">{query}</span></h2>
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




export async function getServerSideProps(context) {
  const searchQuery = context.query.query
  const result = await getSearchResults(context.query.query);
  return {
    props: {
      data:result,
      query:searchQuery
    },
  };
}