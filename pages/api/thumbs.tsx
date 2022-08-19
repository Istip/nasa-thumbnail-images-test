import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch('https://images-api.nasa.gov/search?q=moon');
  const data = await response.json();

  const filtered = data.collection.items.map(
    (item: any) =>
      item.links || [
        {
          href: '',
          rel: 'preview',
          render: 'image',
        },
      ]
  );
  const hrefData = filtered.map((item: any) => item[0]);

  res.status(200).send(hrefData);
}
