import type { NextPage } from 'next'

import { Another, Basic } from 'test-nextjs-lib'
// import * as lib from 'test-nextjs-lib'

const Home: NextPage = () => {
  console.log("LIB:", {Another, Basic})
  return (
    <>
      {/* <Basic>Test Basic</Basic>
      <BasicWithHook>Test Hook</BasicWithHook> */}
    </>
  )
}

export default Home
