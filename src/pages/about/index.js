import Head from 'next/head'
import Link from 'next/link'

export default function About() {
    return (
      <div>
        <Head>
          <title>Next App</title>
          <meta name="description" content="A sample next app" />
        </Head>
  
        <h1>About Page</h1>
        <h3><Link href='/'><a>Back to Home</a></Link></h3>
  
      </div>
    )
  }