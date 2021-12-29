import { getToolsDataByTag } from "../../lib/data";

export default async function handler(req, res) {
  const { cursor, tag } = req.query;
  const tools = await getToolsDataByTag(cursor, tag);

  res.status(200).json(tools);
}
