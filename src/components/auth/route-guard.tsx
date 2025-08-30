"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "../../contexts/auth-context"

interface RouteGuardProps {
  children: React.ReactNode
  requireAuth?: boolean
  redirectTo?: string
}

export function RouteGuard({ children, requireAuth = true, redirectTo = "/auth/login" }: RouteGuardProps) {
  const { isAuthenticated, isLoading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (requireAuth && !isAuthenticated) {
        router.push(redirectTo)
      } else if (!requireAuth && isAuthenticated) {
        router.push("/")
      }
    }
  }, [isAuthenticated, isLoading, requireAuth, redirectTo, router])

  // Show enhanced loading while checking auth
  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/20 border-t-primary mx-auto"></div>
            <div className="animate-pulse absolute inset-0 rounded-full h-12 w-12 border-4 border-transparent border-t-accent/40"></div>
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium text-foreground font-sans">Invoice SaaS</p>
            <p className="text-sm text-muted-foreground font-mono">Đang tải...</p>
          </div>
        </div>
      </div>
    )
  }

  // Don't render children if auth check fails
  if (requireAuth && !isAuthenticated) {
    return null
  }

  if (!requireAuth && isAuthenticated) {
    return null
  }

  return <>{children}</>
}
