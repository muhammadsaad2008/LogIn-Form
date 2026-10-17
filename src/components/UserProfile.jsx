import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronDown, LogOut, UserRound } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

export default function UserProfile() {
  const { currentUser, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  if (!currentUser) return null

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 rounded-xl p-2 hover:bg-gray-100"
        aria-expanded={open}
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          <UserRound size={21} aria-hidden="true" />
        </span>

        <span className="hidden text-left sm:block">
          <span className="block font-semibold text-gray-800">
            {currentUser.name}
          </span>
          <span className="block text-xs text-gray-500">
            Demo User
          </span>
        </span>

        <ChevronDown size={18} className="text-gray-500" />
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-3 w-72 max-w-[calc(100vw-2rem)] rounded-xl border border-gray-200 bg-white p-4 shadow-xl">
          <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-100 text-xl font-bold text-blue-700">
              <UserRound size={22} aria-hidden="true" />
            </div>

            <div className="min-w-0">
              <p className="truncate font-semibold text-gray-900">
                {currentUser.name}
              </p>
              <p className="truncate text-sm text-gray-500">
                {currentUser.email}
              </p>
            </div>
          </div>

          <div className="space-y-3 py-4 text-sm">
            <p className="break-all text-gray-600">
              <span className="font-semibold text-gray-800">
                User ID:
              </span>{' '}
              {currentUser.id}
            </p>

            <p className="break-all text-gray-600">
              <span className="font-semibold text-gray-800">
                Email:
              </span>{' '}
              {currentUser.email}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setOpen(false)
              handleLogout()
            }}
            className="flex w-full items-center gap-2 rounded-lg border-t border-gray-100 pt-4 text-left font-medium text-red-600 hover:text-red-700"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  )
}