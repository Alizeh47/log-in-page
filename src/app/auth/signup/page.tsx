'use client'

import { useState } from 'react'
import { Mail, Lock, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'
import { useAuth } from '@/contexts/auth-context'
import SocialButtons from '@/components/auth/social-buttons'

export default function SignUpPage() {
  const { signUp } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      await signUp(email, password, fullName)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:block lg:w-1/2 bg-[#f5f5f0] relative">
        <div className="h-full flex items-center justify-center">
          <div className="flex items-center gap-8 px-12">
            <div className="flex-1 text-left pr-4">
              <h1 className="text-5xl font-medium leading-tight font-['Barrio']">
                <span className="block bg-gradient-to-r from-[#103249] to-[#000000] bg-clip-text text-transparent">
                  Join Our Community
                </span>
                <span className="block mt-1 bg-gradient-to-r from-[#103249] to-[#000000] bg-clip-text text-transparent">
                  Start Your Journey
                </span>
              </h1>
            </div>
            <div className="relative w-[400px] h-[400px] mb-12">
              <Image
                src="/signup-illustration.png"
                alt="Sign up illustration"
                width={350}
                height={400}
                className="object-contain mix-blend-multiply scale-110"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Sign Up Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold font-['Barrio'] text-black">Create Account</h2>
            <p className="mt-3 text-black font-['Barrio']">Please enter your details to sign up</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-100 rounded-md">
                {error}
              </div>
            )}

            {/* Full Name Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-black font-['Barrio']">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-black" />
                </div>
                <Input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="pl-10 font-['Barrio'] text-black placeholder:text-black/60"
                  placeholder="Enter your full name"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

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
                  placeholder="Create a password"
                  disabled={isLoading}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              className="w-full text-base font-['Barrio']"
              disabled={isLoading}
              variant="gradient"
            >
              Create Account
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

            {/* Sign In Link */}
            <div className="text-center">
              <p className="text-sm text-black font-['Barrio']">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="bg-gradient-to-r from-[#103249] to-[#000000] bg-clip-text text-transparent hover:opacity-80 font-['Barrio']"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
} 