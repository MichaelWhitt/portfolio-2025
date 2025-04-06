import { useEffect, useState } from 'react'

interface PortalProps {
  children: React.ReactNode
}

export function Portal({ children }: PortalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div id="portal-root" className="fixed inset-0 pointer-events-none z-[9999]">
      <div className="pointer-events-auto">
        {children}
      </div>
    </div>
  )
} 