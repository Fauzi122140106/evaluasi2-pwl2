'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import BeritaUtama from '../berita/page';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const googleUser = localStorage.getItem('googleUser');
    if (!googleUser) {
      router.push('/login');
    } else {
      setUser(JSON.parse(googleUser));
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        Selamat Datang, 
      </h1>
      <BeritaUtama />
    </main>
  );
}
