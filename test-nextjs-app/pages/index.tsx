import type { NextPage } from 'next'

import { Another, Basic, BasicWithHook } from 'test-nextjs-lib'
import * as lib from 'test-nextjs-lib'

const Home: NextPage = () => {
  console.log("LIB:", {lib})
  return (
    <>
      <Another>Test Another</Another>
      <Basic>Test Basic</Basic>
      <BasicWithHook>Test Hook</BasicWithHook>
    </>
  )
}

export default Home
