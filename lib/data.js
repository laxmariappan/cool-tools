import { Client } from '@notionhq/client';

export async function getAllData(){
    try {
        const notion = new Client({ auth: process.env.NOTION_API_KEY });
        const response = await notion.databases.query({
          database_id: process.env.NOTION_DATABASE_ID,
          page_size:4,
          filter:{
                  property: 'Status',
                  checkbox: {
                    equals: true,
                },            
            },
        });
    //console.log(response)
    const [ ...tools] = response.results 
    return({
        tools:tools,
        error:false,
        message:"success"
        })
} catch (error) {
    console.error(error);
    return({
        tools:false,
        error:true,
        message:"Something went wrong, unable to fetch data"
        })
}
   
}

export async function getDataByTag(tag){ 
    try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      page_size:100,
      filter:{
        and: [
            {
              property: 'Tags',
              multi_select:{
                contains: tag
              }
            },
            {
              property: 'Status',
              checkbox: {
                equals: true,
              },
            },
          ],
        },
    });

    const [ ...tools] = response.results 

    return({
        tools:tools,
        error:false,
        message:"success"
        })
    } catch (error) {
        console.error(error);
        return({
            tools:false,
            error:true,
            message:"Something went wrong, unable to fetch data"
            })
    }
}

export async function getSearchResults(query){ 
    try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.search({
        query: query,
    });

    const [ ...tools] = response.results
    const error = (tools.length===0) ? true : false 
    const message = (tools.length===0) ? "No results found" : "success" 
    return({
        tools:tools,
        error:error,
        message:message
        })
    } catch (error) {
        console.error(error);
        return({
            tools:false,
            error:true,
            message:"Something went wrong, unable to fetch data"
            })
    }
}