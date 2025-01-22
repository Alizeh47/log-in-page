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
        className="font-['Barrio'] text-black border-black hover:bg-black/5"
      >
        <Github className="mr-2 h-4 w-4 text-black" />
        GitHub
      </Button>
      <Button
        variant="outline"
        type="button"
        disabled={isLoading}
        onClick={() => {/* Handle Twitter login */}}
        className="font-['Barrio'] text-black border-black hover:bg-black/5"
      >
        <Twitter className="mr-2 h-4 w-4 text-black" />
        Twitter
      </Button>
    </div>
  )
} 