"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { type User, authAPI, tokenManager } from "@/lib/auth"

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  register: (data: {
    name: string
    email: string
    company: string
    password: string
  }) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user

  // Check for existing token on mount
  useEffect(() => {
    const token = tokenManager.getToken()
    if (token) {
      // In real app, would validate token with server
      // For mock, we'll assume token is valid and set a mock user
      setUser({
        id: "1",
        name: "Nguyễn Văn A",
        email: "test@example.com",
        company: "Công ty ABC",
      })
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await authAPI.login(email, password)
      setUser(response.user)
      tokenManager.setToken(response.token)
    } catch (error) {
      throw error
    }
  }

  const register = async (data: {
    name: string
    email: string
    company: string
    password: string
  }) => {
    try {
      const response = await authAPI.register(data)
      setUser(response.user)
      tokenManager.setToken(response.token)
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      await authAPI.logout()
      setUser(null)
      tokenManager.removeToken()
    } catch (error) {
      console.error("Logout error:", error)
    }
  }

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
