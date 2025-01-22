'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { Session, User } from '@supabase/supabase-js'
import { authService } from '@/services/auth'
import { useRouter } from 'next/navigation'

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, fullName: string) => Promise<void>
  signInWithGithub: () => Promise<void>
  signInWithTwitter: () => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check active session
    authService.getSession().then(({ data }) => {
      setSession(data)
      setUser(data?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = authService.onAuthStateChange((_, session) => {
      setSession(session)
      setUser(session?.user ?? null)
      setLoading(false)
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const value = {
    user,
    session,
    loading,
    signIn: async (email: string, password: string) => {
      const { data, error } = await authService.signIn(email, password)
      if (error) throw error
      if (data) router.push('/dashboard')
    },
    signUp: async (email: string, password: string, fullName: string) => {
      const { data, error } = await authService.signUp(email, password, fullName)
      if (error) throw error
      if (data) router.push('/dashboard')
    },
    signInWithGithub: async () => {
      const { error } = await authService.signInWithGithub()
      if (error) throw error
    },
    signInWithTwitter: async () => {
      const { error } = await authService.signInWithTwitter()
      if (error) throw error
    },
    signOut: async () => {
      const { error } = await authService.signOut()
      if (error) throw error
      router.push('/login')
    },
    resetPassword: async (email: string) => {
      const { error } = await authService.resetPassword(email)
      if (error) throw error
    }
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 