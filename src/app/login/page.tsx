"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Box, ArrowRight, Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate network delay for realistic feel
    setTimeout(() => {
      setIsLoading(false)
      // For this demo, any credentials work and redirect to the dashboard
      router.push("/dashboard")
    }, 1200)
  }

  return (
    <div className="min-h-screen w-full flex bg-background text-foreground">
      
      {/* Left Pane - Image */}
      <div className="hidden lg:flex w-1/2 relative bg-muted items-end p-12 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1600&q=80" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
        </div>
        
        {/* Overlay Content */}
        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-2 font-bold text-xl tracking-widest uppercase text-white mb-8">
            <Box className="h-6 w-6" />
            <span>Archnova</span>
          </div>
          <h1 className="text-4xl font-serif text-white mb-4 leading-tight">
            Designing spaces that shape the future.
          </h1>
          <p className="text-white/70 text-lg">
            Welcome to the Archnova Client Portal. Log in to track your project progress, view blueprints, and communicate with your architectural team.
          </p>
        </div>
      </div>

      {/* Right Pane - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          
          {/* Mobile Logo */}
          <div className="flex lg:hidden items-center justify-center gap-2 font-bold text-2xl tracking-widest uppercase mb-8">
            <Box className="h-8 w-8 text-primary" />
            <span>Archnova</span>
          </div>

          <div className="space-y-2 text-center lg:text-left">
            <h2 className="text-3xl font-serif tracking-tight">Welcome back</h2>
            <p className="text-muted-foreground">
              Enter your credentials to access your workspace.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 mt-8">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="client@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-card h-12 px-4"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a href="#" className="text-sm text-primary hover:underline font-medium">
                    Forgot password?
                  </a>
                </div>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder="••••••••" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-card h-12 px-4"
                />
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-medium"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  Sign In <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>

          <div className="text-center pt-6 border-t border-border mt-8">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <a href="#" className="text-primary hover:underline font-medium">
                Request access from your project manager.
              </a>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}
