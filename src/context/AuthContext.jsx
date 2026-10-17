import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem('demoUser')) || null
        } catch {
            return null
        }
    })

    function signup(name, email, password) {
        const users = JSON.parse(
            localStorage.getItem('demoUsers') || '[]'
        )

        const normalizedEmail = email.trim().toLowerCase()

        const exists = users.some(
            user => user.email === normalizedEmail
        )

        if (exists) {
            return {
                success: false,
                message: 'This email is already registered.',
            }
        }

        const newUser = {
            id: 'USR-' + Date.now().toString(36).toUpperCase(),
            name: name.trim(),
            email: normalizedEmail,
            password,
        }

        localStorage.setItem(
            'demoUsers',
            JSON.stringify([...users, newUser])
        )

        const safeUser = {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
        }

        localStorage.setItem('demoUser', JSON.stringify(safeUser))
        setCurrentUser(safeUser)

        return { success: true }
    }

    function login(email, password) {
        const users = JSON.parse(
            localStorage.getItem('demoUsers') || '[]'
        )

        const user = users.find(
            item =>
                item.email === email.trim().toLowerCase() &&
                item.password === password
        )

        if (!user) {
            return {
                success: false,
                message: 'Invalid email or password.',
            }
        }

        const safeUser = {
            id: user.id,
            name: user.name,
            email: user.email,
        }

        localStorage.setItem('demoUser', JSON.stringify(safeUser))
        setCurrentUser(safeUser)

        return { success: true }
    }

    function logout() {
        localStorage.removeItem('demoUser')
        setCurrentUser(null)
    }

    return (
        <AuthContext.Provider
            value={{ currentUser, signup, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}