import Head from 'next/head'
import Link from 'next/link'
import { getAllProducts } from '../../services/productsService'

export async function getStaticProps() {
  try {
    const products = await getAllProducts()

    if (!products) {
      return {
        notFound: true
      }
    }

    return {
      props: { products },
      revalidate: 1
    }
  } catch (error) {
    console.log(error)
  }
}
    

export default function Products({ products }) {
    return (
      <div>
        <Head>
          <title>Next App</title>
          <meta name="description" content="A sample next app" />
        </Head>
        
        <h1>Product List</h1>
        <ul>
          {products.map( (product) => (
            <Link href={`/products/${product.id}`}>
             <a><li key={product.id}>{product.name}</li></a>
            </Link>
          ))}
        </ul>
        
        <h3><Link href='/'><a>Back to Home</a></Link></h3>
  
      </div>
    )
  }