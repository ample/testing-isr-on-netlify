// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export default async function handler(req, res) {
  const payload = await axios.get(
    `https://cdn.contentful.com/spaces/lkrmxse64d8p/environments/master/entries/QqTCYM8ByheGp68DLkOCM?access_token=${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`
  );
  const { data: { fields: { title } = {} } = {} } = payload;
  res.status(200).json({ title });
}
