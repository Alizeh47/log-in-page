import { supabase } from '@/lib/supabase'
import { User, AuthError } from '@/types/database'
import { AuthResponse, Session, Provider, AuthTokenResponse, AuthUser } from '@supabase/supabase-js'

interface AuthServiceResponse<T = any> {
  data: T | null
  error: AuthError | null
}

export const authService = {
  async signIn(email: string, password: string): Promise<AuthServiceResponse<Session>> {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { data: data?.session || null, error }
  },

  async signUp(email: string, password: string, fullName: string): Promise<AuthServiceResponse<Session>> {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    })
    return { data: data?.session || null, error }
  },

  async signInWithGithub(): Promise<AuthServiceResponse<boolean>> {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    return { data: !!data, error }
  },

  async signInWithTwitter(): Promise<AuthServiceResponse<boolean>> {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`
      }
    })
    return { data: !!data, error }
  },

  async signOut(): Promise<{ error: AuthError | null }> {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  async resetPassword(email: string): Promise<AuthServiceResponse<boolean>> {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`
    })
    return { data: !!data, error }
  },

  async getSession(): Promise<AuthServiceResponse<Session>> {
    const { data: { session }, error } = await supabase.auth.getSession()
    return { data: session, error }
  },

  async getUser(): Promise<AuthServiceResponse<AuthUser>> {
    const { data: { user }, error } = await supabase.auth.getUser()
    return { data: user, error }
  },

  onAuthStateChange(callback: (event: string, session: Session | null) => void) {
    return supabase.auth.onAuthStateChange(callback)
  }
} 