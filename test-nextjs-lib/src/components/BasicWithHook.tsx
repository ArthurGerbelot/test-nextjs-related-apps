import React, { useState, useEffect } from 'react'
import type { ReactNode } from 'react'

export function BasicWithHook ({children}:{children:ReactNode}):JSX.Element {
  const [state, setState] = useState(5);

  useEffect(() => {
    setTimeout(() => {
      setState(6);
    }, 5000);
  }, []);

  return (<div>BasicWithHook: {`${children}`} is {state}</div>)
}