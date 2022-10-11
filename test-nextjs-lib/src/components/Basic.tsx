import React from 'react'
import type { ReactNode } from 'react'

export function Basic ({children}:{children:ReactNode}):JSX.Element {
  return <div>Basic: {children}</div>
}
