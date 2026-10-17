import { UserRound } from 'lucide-react'
import UserProfile from '../components/UserProfile'

export default function AdminDashboard() {
    return (
        <div className="min-h-screen bg-slate-100">
            <header className="flex items-center justify-between border-b border-gray-200 bg-white px-4 py-4 sm:px-8">
                <h1 className="flex items-center gap-3 text-2xl font-bold text-gray-900">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
                        <UserRound size={18} aria-hidden="true" />
                    </span>
                    My Panel
                </h1>
                <UserProfile />
            </header>
        </div>
    )
}