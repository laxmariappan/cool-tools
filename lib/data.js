import { Client } from "@notionhq/client";

export async function getAllToolsData(cursor) {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      page_size: 4,
      start_cursor: cursor ? cursor : undefined,
      filter: {
        property: "Status",
        checkbox: {
          equals: true,
        },
      },
    });
    return {
      error: false,
      next_cursor: response.next_cursor,
      has_more: response.has_more,
      data: response.results,
    };
  } catch (error) {
    console.error(error);
    return {
      data: false,
      error: true,
    };
  }
}

export async function getToolsDataByTag(cursor, tag) {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      page_size: 4,
      start_cursor: cursor ? cursor : undefined,
      filter: {
        and: [
          {
            property: "Tags",
            multi_select: {
              contains: tag,
            },
          },
          {
            property: "Status",
            checkbox: {
              equals: true,
            },
          },
        ],
      },
    });
    return {
      error: false,
      next_cursor: response.next_cursor,
      has_more: response.has_more,
      data: response.results,
    };
  } catch (error) {
    console.error(error);
    return {
      data: false,
      error: true,
    };
  }
}

export async function getSearchResultsByQuery(cursor, query) {
  try {
    const notion = new Client({ auth: process.env.NOTION_API_KEY });
    const response = await notion.search({
      query: query,
      page_size: 4,
      start_cursor: cursor ? cursor : undefined,
    });
    return {
      error: false,
      next_cursor: response.next_cursor,
      has_more: response.has_more,
      data: response.results,
    };
  } catch (error) {
    console.error(error);
    return {
      data: false,
      error: true,
    };
  }
}
