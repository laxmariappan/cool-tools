import React, { useState, useEffect } from "react";
import Head from 'next/head'
import Header from '../components/Header';
import Tool from "../components/tool";
import { getAllData } from "../lib/data";

export default function Home({data}) {
  const {tools, error, message} = data
  return (
    <>
    <Header/>
    <div className="flex flex-col   py-2 bg-gray-100">
      <Head>
        <title>Cool Tools</title>
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




export async function getStaticProps() {
  const result = await getAllData();
  return {
    props: {
      data:result
    },
    revalidate: 10,
  };
}