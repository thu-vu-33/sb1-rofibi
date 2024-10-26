import Link from 'next/link';
import Image from 'next/image';

export default function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id} className="group">
          <div className="relative overflow-hidden rounded-lg aspect-[2/3]">
            <Image
              src={movie.image}
              alt={movie.title}
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-lg font-bold">{movie.title}</h3>
              {movie.views && (
                <p className="text-sm text-gray-300">{movie.views.toLocaleString()} views</p>
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}