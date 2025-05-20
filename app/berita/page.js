"use client";
import { useState, useEffect } from "react";

const portals = [
  { name: "CNN", source: "cnn" },
  { name: "BBC News", source: "bbc-news" },
  { name: "TechCrunch", source: "techcrunch" },
  { name: "The Verge", source: "the-verge" },
  { name: "Al Jazeera", source: "al-jazeera-english" },
];

async function fetchBeritaBySource(source) {
  const apiKey = "e1b550255d0e4ef7852d1f038c28571c";
  try {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`
    );
    const data = await res.json();
    return data.articles ?? [];
  } catch (error) {
    console.error(`Gagal fetch dari ${source}:`, error);
    return [];
  }
}

export default function BeritaPage() {
  const [beritaPerPortal, setBeritaPerPortal] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function loadAll() {
      const all = await Promise.all(
        portals.map(async (portal) => {
          const berita = await fetchBeritaBySource(portal.source);
          return { name: portal.name, berita };
        })
      );
      setBeritaPerPortal(all);
    }
    loadAll();
  }, []);

  const filteredBerita = (berita) => {
    return berita.filter((item) =>
      item.title?.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <main className="min-h-screen bg-[#202124] text-white px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Berita Utama Hari Ini
        </h1>

        <div className="mb-10">
          <input
            type="text"
            placeholder="Cari berita..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg bg-[#303134] border border-[#5f6368] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {beritaPerPortal.map((portal, i) => {
          const beritaTersaring = filteredBerita(portal.berita);
          return (
            <section key={i} className="mb-10">
              <h2 className="text-2xl font-semibold text-blue-400 mb-4">
                {portal.name}
              </h2>
              {beritaTersaring.length === 0 ? (
                <p className="text-sm text-gray-400">
                  Tidak ada berita yang cocok.
                </p>
              ) : (
                <div className="space-y-4">
                  {beritaTersaring.slice(0, 5).map((item, idx) => (
                    <a
                      key={idx}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-4 items-start bg-[#303134] p-4 rounded-xl hover:bg-[#3c4043] transition duration-200"
                    >
                      {item.urlToImage && (
                        <img
                          src={item.urlToImage}
                          alt={item.title}
                          className="w-36 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white hover:underline">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-300 mt-1">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>
    </main>
  );
}
