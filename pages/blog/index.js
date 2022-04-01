import Head from 'next/head'
import Link from 'next/link'

export default function Blog({ posts })  {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        
         <h1>blog</h1>
         <main>
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

        <ul>
      {posts.map((post) => (
        <li> <Link href={"/blog/" + post.id}  >
        <a> {post.title}</a>
      </Link></li>
      ))}
    </ul>
      </main>
   

    
 
    </div>
  )
}
// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
