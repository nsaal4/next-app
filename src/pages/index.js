import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="A sample next app" />
      </Head>

      <h1>Home Page</h1>
      <h3><Link href='/about'><a>Go to About</a></Link></h3>
      <h3><Link href='/products'><a>Go to Products</a></Link></h3>

    </div>
  )
}
