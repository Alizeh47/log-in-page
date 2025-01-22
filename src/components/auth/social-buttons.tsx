'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { Github, Twitter, Loader2 } from 'lucide-react'
import { useAuth } from '@/contexts/auth-context'
import { toast } from 'sonner'

interface SocialButtonsProps {
  isLoading?: boolean
}

export default function SocialButtons({ isLoading: formLoading }: SocialButtonsProps) {
  const { signInWithGithub, signInWithTwitter } = useAuth()
  const [loading, setLoading] = useState<'github' | 'twitter' | null>(null)

  const handleGitHubLogin = async () => {
    try {
      setLoading('github')
      await signInWithGithub()
      // User will be redirected to GitHub
    } catch (error) {
      toast.error('Failed to connect to GitHub. Please try again.')
      console.error('GitHub login error:', error)
    } finally {
      setLoading(null)
    }
  }

  const handleTwitterLogin = async () => {
    try {
      setLoading('twitter')
      await signInWithTwitter()
      // User will be redirected to Twitter
    } catch (error) {
      toast.error('Failed to connect to Twitter. Please try again.')
      console.error('Twitter login error:', error)
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        type="button"
        disabled={formLoading || loading !== null}
        onClick={handleGitHubLogin}
        className="font-['Barrio'] text-black border-black hover:bg-black/5 relative"
      >
        {loading === 'github' ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Github className="mr-2 h-4 w-4 text-black" />
        )}
        {loading === 'github' ? 'Connecting...' : 'GitHub'}
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={formLoading || loading !== null}
        onClick={handleTwitterLogin}
        className="font-['Barrio'] text-black border-black hover:bg-black/5"
      >
        {loading === 'twitter' ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Twitter className="mr-2 h-4 w-4 text-black" />
        )}
        {loading === 'twitter' ? 'Connecting...' : 'Twitter'}
      </Button>
    </div>
  )
} 