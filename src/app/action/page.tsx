'use client';

import { useState } from 'react';
import MovieGrid from '@/components/MovieGrid';
import Pagination from '@/components/Pagination';

const actionMovies = [
  {
    id: 1,
    title: 'Transformers One',
    image: '/transformers.jpg',
    genre: 'Action'
  },
  {
    id: 2,
    title: 'Alien: Romulus',
    image: '/alien.jpg',
    genre: 'Action'
  }
];

const ITEMS_PER_PAGE = 10;

export default function ActionMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(actionMovies.length / ITEMS_PER_PAGE);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-yellow-500 mb-6">Action Movies</h1>
      <MovieGrid movies={actionMovies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}