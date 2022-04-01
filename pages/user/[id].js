import Head from 'next/head'
import Link from 'next/link'

export default function User({ user, posts })  {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        
         <h1>user</h1>
         
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

        <h2>{user.name}</h2>

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

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  const paths = users.map((user) => ({
    params: { id: user.id.toString() },
  }))

  return { paths, fallback: false }
}


// This function gets called at build time
export async function getStaticProps({params}) {
  // Call an external API endpoint to get posts
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await res.json()

  const res2 = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}/posts`)
  const posts = await res2.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      user,
      posts
    },
  }
}
