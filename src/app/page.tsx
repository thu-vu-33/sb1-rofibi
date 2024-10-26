import MovieGrid from '@/components/MovieGrid'

const recentMovies = [
  {
    id: 1,
    title: 'Transformers One',
    image: '/transformers.jpg',
    views: 125000
  },
  {
    id: 2,
    title: 'Alien: Romulus',
    image: '/alien.jpg',
    views: 98000
  },
  {
    id: 3,
    title: 'The Wild Robot',
    image: '/wild-robot.jpg',
    views: 85000
  },
  {
    id: 4,
    title: 'The Substance',
    image: '/substance.jpg',
    views: 76000
  },
  {
    id: 5,
    title: 'The Platform 2',
    image: '/platform.jpg',
    views: 112000
  }
]

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6">Most Viewed Recently</h2>
      <MovieGrid movies={recentMovies} />
    </main>
  )
}