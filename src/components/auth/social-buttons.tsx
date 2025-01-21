'use client'

import { Button } from '../ui/button'
import { Github, Twitter } from 'lucide-react'

interface SocialButtonsProps {
  isLoading?: boolean
}

export default function SocialButtons({ isLoading }: SocialButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {/* Handle GitHub login */}}
      >
        <Github className="mr-2 h-4 w-4" />
        GitHub
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {/* Handle Twitter login */}}
      >
        <Twitter className="mr-2 h-4 w-4" />
        Twitter
      </Button>
    </div>
  )
} 