import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1>Homepage</h1>
         <ul>
           <li>
           <Link href="/">
            <a>Home</a>
          </Link>
          </li>
          <li>
           <Link href="/blog">
            <a>Blog</a>
          </Link>
          </li>
        </ul>
      </main>

      
    </div>
  )
}
