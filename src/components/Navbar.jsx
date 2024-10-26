import Link from 'next/link';
import { FaSearch, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-2xl font-bold text-green-400">
            PhimSky
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-green-400">Home</Link>
            <Link href="/action" className="hover:text-green-400">Action</Link>
            <Link href="/romantic" className="hover:text-green-400">Romantic</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search movies..."
              className="bg-gray-700 px-4 py-2 rounded-lg pr-10"
            />
            <FaSearch className="absolute right-3 top-3 text-gray-400" />
          </div>
          <button className="flex items-center space-x-2 bg-green-500 px-4 py-2 rounded-lg">
            <FaUser />
            <span>Account</span>
          </button>
        </div>
      </div>
    </nav>
  );
}