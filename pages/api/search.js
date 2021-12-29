// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSearchResultsByQuery } from "../../lib/data";

export default async function search(req, res) {
  try {
    const { cursor, query } = req.query;
    const tools = await getSearchResultsByQuery(cursor, query);
    res.status(200).json(tools);
  } catch (error) {
    res.status(500).json({ msg: "There was an error" });
  }
}
