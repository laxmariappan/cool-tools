import { getAllToolsData } from '../../lib/data';

export default async function handler(req, res) {
  const { cursor } = req.query;
  const tools = await getAllToolsData(cursor);

  res.status(200).json(tools);
}