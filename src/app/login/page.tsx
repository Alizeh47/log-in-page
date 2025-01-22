import LoginForm from '@/components/auth/login-form'
import { Metadata } from 'next'
import Image from 'next/image'
import { supabase } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Login | Simple Access',
  description: 'Login to your account',
}

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:block lg:w-1/2 bg-[#f5f5f0] relative">
        <div className="h-full flex items-center justify-center">
          <div className="p-8 relative w-full h-full">
            <Image
              src="/login-illustration.png"
              alt="Login illustration"
              fill
              className="object-contain p-8"
              priority
            />
          </div>
          <div className="absolute top-[60%] left-0 right-[15%] text-center px-12">
            <h1 className="text-4xl font-medium leading-tight font-['Barrio']">
              <span className="block bg-gradient-to-r from-[#103249] to-[#000000] bg-clip-text text-transparent">
                Transform Your Ideas
              </span>
              <span className="block mt-1 bg-gradient-to-r from-[#103249] to-[#000000] bg-clip-text text-transparent">
                Into Digital Reality
              </span>
            </h1>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 border-l border-gray-200">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="text-5xl font-bold font-['Barrio'] text-black">Welcome back</h2>
            <p className="mt-3 text-black font-['Barrio']">Please enter your details to sign in</p>
          </div>
          <LoginForm />
        </div>
      </div>
    </main>
  )
} 