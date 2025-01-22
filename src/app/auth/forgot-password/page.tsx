'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const router = useRouter()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to send reset email')
      }

      setSuccess(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-['Barrio'] text-black">Reset Password</h2>
          <p className="mt-2 text-black font-['Barrio']">
            Enter your email to receive a password reset link
          </p>
        </div>

        {success ? (
          <div className="text-center space-y-4">
            <div className="p-3 text-sm text-green-700 bg-green-100 rounded-md">
              Check your email for a password reset link
            </div>
            <Link 
              href="/login"
              className="block text-sm text-black hover:underline font-['Barrio']"
            >
              Back to login
            </Link>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            {error && (
              <div className="p-3 text-sm text-red-500 bg-red-100 rounded-md">
                {error}
              </div>
            )}
            
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

            <div className="space-y-4">
              <Button
                type="submit"
                className="w-full text-base font-['Barrio']"
                disabled={isLoading}
                variant="gradient"
              >
                Send Reset Link
              </Button>
              
              <Link 
                href="/login"
                className="block text-center text-sm text-black hover:underline font-['Barrio']"
              >
                Back to login
              </Link>
            </div>
          </form>
        )}
      </div>
    </main>
  )
} 