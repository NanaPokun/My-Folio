import type { NextPage } from 'next'
import Head from 'next/head'
import About from "../components/About";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>My portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
       {/* <About /> */}
       <Hero />
      </main>
    </div>
  )
}

export default Home
