'use client'

import { useState } from 'react'
import { Mail, Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import SocialButtons from './social-buttons'

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    try {
      // Add authentication logic here
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Email Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Email
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10"
            placeholder="Enter your email"
            disabled={isLoading}
            required
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10"
            placeholder="Enter your password"
            disabled={isLoading}
            required
          />
        </div>
      </div>

      {/* Forgot Password Link */}
      <div className="flex justify-end">
        <a href="#" className="text-sm bg-gradient-to-r from-[#103249] to-[#000000] bg-clip-text text-transparent hover:opacity-80">
          Forgot your password?
        </a>
      </div>

      {/* Sign In Button */}
      <Button
        type="submit"
        className="w-full font-cinzel text-base"
        disabled={isLoading}
        variant="gradient"
      >
        Sign in
      </Button>

      {/* Social Login Section */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <SocialButtons isLoading={isLoading} />

      {/* Sign Up Link */}
      <div className="text-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{' '}
          <a href="#" className="bg-gradient-to-r from-[#103249] to-[#000000] bg-clip-text text-transparent hover:opacity-80">
            Sign up
          </a>
        </p>
      </div>
    </form>
  )
} 