export interface User {
  id: string
  email: string
  created_at: string
  app_metadata: {
    provider?: string
    providers?: string[]
  }
  user_metadata: {
    avatar_url?: string
    full_name?: string
  }
}

export interface AuthError {
  message: string
  status?: number
}

export interface Database {
  public: {
    Tables: {
      // Add your Supabase tables here
    }
    Views: {
      // Add your views here
    }
    Functions: {
      // Add your functions here
    }
  }
} 