import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-6 py-4 shadow-sm md:px-12">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        MyPanel
      </Link>

      <div className="flex items-center gap-3 sm:gap-6">
        <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link>

        <Link
          to="/login"
          className="font-medium text-gray-700 hover:text-blue-600"
        >
          Login
        </Link>

        <Link
          to="/signup"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  )
}