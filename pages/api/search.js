// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSearchResults } from "../../lib/data";

export default async function search(req, res) {

  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { query } = req.body;
    const result = await getSearchResults(query);
    res.status(201).json({ result: result });
  } catch (error) {
   res.status(500).json({ msg: 'There was an error' });
  }

}