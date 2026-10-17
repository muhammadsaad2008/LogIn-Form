import { Link } from 'react-router-dom'
import Navbar from '../components/navbar'

export default function Home() {
    return (
        <div className="min-h-screen">
            <Navbar />

            <main className="flex min-h-[80vh] items-center justify-center px-6 py-16">
                <div className="max-w-2xl text-center">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                        Welcome to MyPanel
                    </span>

                    <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-6xl">
                        Manage Everything in One Place
                    </h1>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                        Sign up or log in to explore your personalized dashboard
                        and manage your profile information.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            to="/signup"
                            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                        >
                            Get Started
                        </Link>

                        <Link
                            to="/login"
                            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    )
}