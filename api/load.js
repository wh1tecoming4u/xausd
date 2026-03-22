import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const filePath = path.join(process.cwd(), 'data', 'store.json');
    const raw = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '{}';
    const data = JSON.parse(raw);
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
