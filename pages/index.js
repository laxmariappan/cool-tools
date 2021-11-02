import React, { useState, useEffect } from "react";
import Head from 'next/head'
import { Client } from '@notionhq/client';

export default function Home({tools}) {

  return (
    <>
    <div className="flex flex-col   py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {tools && tools.map(function(item){
        return(
          <p key={item.id}>{item.properties.Name.title[0] && item.properties.Name.title[0].plain_text}</p>
        )
      })
      }
      
      
    </div>
    </>
  )
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  const [, ...tools] = response.results// exclue the first row that has column titles
  return {
    props: {
      tools: tools,
    },
    revalidate: 1,
  };
}