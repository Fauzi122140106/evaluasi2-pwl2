const portals = [
  { name: "CNN", source: "cnn" },
  { name: "BBC News", source: "bbc-news" },
  { name: "TechCrunch", source: "techcrunch" },
  { name: "The Verge", source: "the-verge" },
  { name: "Al Jazeera", source: "al-jazeera-english" },
];

async function fetchBeritaBySource(source) {
  const apiKey = "e1b550255d0e4ef7852d1f038c28571c"; // Ganti dengan API key kamu
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

export default async function BeritaPage() {
  const beritaPerPortal = await Promise.all(
    portals.map(async (portal) => {
      const berita = await fetchBeritaBySource(portal.source);
      return { name: portal.name, berita };
    })
  );

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-10">
        Berita Utama 
      </h1>

      {beritaPerPortal.map((portal, i) => (
        <section key={i} className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {portal.name}
          </h2>
          {portal.berita.length === 0 ? (
            <p className="text-sm text-gray-500 mb-6">
              Tidak ada berita yang tersedia.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {portal.berita.slice(0, 3).map((item, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl shadow-md">
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">
                      {item.title}
                    </h3>
                  </a>
                  {item.urlToImage && (
                    <img
                      src={item.urlToImage}
                      alt={item.title}
                      className="w-full h-48 object-cover rounded-md mb-3"
                    />
                  )}
                  <p className="text-sm text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </section>
      ))}
    </main>
  );
}
