"use client"

import { toast as sonnerToast } from "sonner"

export function toast(
  message: string,
  options?: {
    description?: string
    action?: {
      label: string
      onClick: () => void
    }
  },
) {
  return sonnerToast(message, {
    description: options?.description,
    action: options?.action,
  })
}

toast.success = (message: string, description?: string) => {
  return sonnerToast.success(message, { description })
}

toast.error = (message: string, description?: string) => {
  return sonnerToast.error(message, { description })
}

toast.warning = (message: string, description?: string) => {
  return sonnerToast.warning(message, { description })
}

toast.info = (message: string, description?: string) => {
  return sonnerToast.info(message, { description })
}

export function useToast() {
  return {
    toast,
    dismiss: sonnerToast.dismiss,
  }
}
