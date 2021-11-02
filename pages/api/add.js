// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Client } from '@notionhq/client';



export default async function add(req, res) {
  /* add new Row data */ 
  const newRow = [
    req.body.name, 
    req.body.link, 
    req.body.category, 
]
const notion = new Client({ auth: process.env.NOTION_API_KEY });

  
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { name, link, description } = req.body;
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Link: {
          rich_text: [
            {
              text: {
                content: link,
              },
            },
          ],
        },
        Description: {
          rich_text: [
            {
              text: {
                content: description,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: 'Success' });
  } catch (error) {
   // console.log(error)
   res.status(500).json({ msg: 'There was an error' });
  }

}