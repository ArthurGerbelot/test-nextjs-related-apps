import React from 'react'
import type { ReactNode } from 'react'

export function Another ({children}:{children:ReactNode}):JSX.Element {
  return <div>Another: {children}</div>
}
