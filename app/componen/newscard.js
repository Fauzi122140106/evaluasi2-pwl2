'use client';

import Link from 'next/link';

export default function NewsCard({ data }) {
  const slug = encodeURIComponent(data.title.slice(0, 30));

  return (
    <Link href={`/berita/${slug}`}>
      <div className="border p-3 rounded shadow hover:shadow-lg">
        <img src={data.urlToImage} alt={data.title} className="w-full h-48 object-cover mb-2" />
        <h2 className="text-lg font-semibold">
          {data.title.length > 100 ? data.title.slice(0, 100) + '...' : data.title}
        </h2>
        <p className="text-sm text-gray-500">{new Date(data.publishedAt).toLocaleString()}</p>
      </div>
    </Link>
  );
}
