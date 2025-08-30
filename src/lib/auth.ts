// Mock user data and authentication logic
export interface User {
  id: string
  name: string
  email: string
  company: string
}

export interface AuthResponse {
  user: User
  token: string
}

// Mock users database
const mockUsers: User[] = [
  {
    id: "1",
    name: "Nguyễn Văn A",
    email: "test@example.com",
    company: "Công ty ABC",
  },
]

// Mock API functions
export const authAPI = {
  async login(email: string, password: string): Promise<AuthResponse> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock authentication logic
    if (email === "test@example.com" && password === "password") {
      const user = mockUsers.find((u) => u.email === email)!
      return {
        user,
        token: `mock-jwt-token-${Date.now()}`,
      }
    }

    throw new Error("Email hoặc mật khẩu không đúng")
  },

  async register(data: {
    name: string
    email: string
    company: string
    password: string
  }): Promise<AuthResponse> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Check if user already exists
    if (mockUsers.some((u) => u.email === data.email)) {
      throw new Error("Email đã được sử dụng")
    }

    // Create new user
    const newUser: User = {
      id: String(mockUsers.length + 1),
      name: data.name,
      email: data.email,
      company: data.company,
    }

    mockUsers.push(newUser)

    return {
      user: newUser,
      token: `mock-jwt-token-${Date.now()}`,
    }
  },

  async logout(): Promise<void> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    // In real app, would invalidate token on server
  },
}

// Token management
export const tokenManager = {
  getToken(): string | null {
    if (typeof window === "undefined") return null
    return localStorage.getItem("auth-token")
  },

  setToken(token: string): void {
    if (typeof window === "undefined") return
    localStorage.setItem("auth-token", token)
  },

  removeToken(): void {
    if (typeof window === "undefined") return
    localStorage.removeItem("auth-token")
  },
}
