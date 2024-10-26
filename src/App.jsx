import React from 'react';
import Navbar from './components/Navbar';
import FilterSection from './components/FilterSection';
import MovieGrid from './components/MovieGrid';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <FilterSection />
        <section className="my-8">
          <h2 className="text-2xl font-bold text-yellow-500 mb-6">PHIM ĐỀ CỬ</h2>
          <MovieGrid />
        </section>
      </main>
    </div>
  );
}

export default App;