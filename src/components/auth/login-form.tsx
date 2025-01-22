'use client'

import { useState } from 'react'
import { Mail, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SocialButtons from './social-buttons'
import { useAuth } from '@/contexts/auth-context'
import Link from 'next/link'

export default function LoginForm() {
  const { signIn } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      await signIn(email, password)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {error && (
        <div className="p-3 text-sm text-red-500 bg-red-100 rounded-md">
          {error}
        </div>
      )}
      {/* Email Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-black font-['Barrio']">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-black" />
          </div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 font-['Barrio'] text-black placeholder:text-black/60"
            placeholder="Enter your email"
            disabled={isLoading}
            required
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-black font-['Barrio']">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-black" />
          </div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 font-['Barrio'] text-black placeholder:text-black/60"
            placeholder="Enter your password"
            disabled={isLoading}
            required
          />
        </div>
      </div>

      {/* Forgot Password Link */}
      <div className="flex justify-end">
        <Link 
          href="/auth/forgot-password"
          className="text-sm bg-gradient-to-r from-[#103249] to-[#000000] bg-clip-text text-transparent hover:opacity-80 font-['Barrio']"
        >
          Forgot your password?
        </Link>
      </div>

      {/* Sign In Button */}
      <Button
        type="submit"
        className="w-full text-base font-['Barrio']"
        disabled={isLoading}
        variant="gradient"
      >
        Sign in
      </Button>

      {/* Social Login Section */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-black" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-black font-['Barrio']">
            Or continue with
          </span>
        </div>
      </div>

      <SocialButtons isLoading={isLoading} />

      {/* Sign Up Link */}
      <div className="text-center">
        <p className="text-sm text-black font-['Barrio']">
          Don't have an account?{' '}
          <Link
            href="/auth/signup"
            className="bg-gradient-to-r from-[#103249] to-[#000000] bg-clip-text text-transparent hover:opacity-80 font-['Barrio']"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  )
} 