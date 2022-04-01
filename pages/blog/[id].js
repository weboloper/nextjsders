import Head from 'next/head'
import Link from 'next/link'

export default function Single({ post })  {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
         <h1>single</h1>
         
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

        <h2>{post.title}</h2>
        user:   <Link href={"/user/"+post.userId}>
            <a>{post.userId}</a>
          </Link>
      
    </main>

       
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}


// This function gets called at build time
export async function getStaticProps({params}) {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
  const post = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      post,
    },
  }
}
