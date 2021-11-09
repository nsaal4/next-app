import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getAllProducts, getProduct } from '../../services/productsService'

export async function getStaticPaths() {
  try {
    const products = await getAllProducts()

    const paths = products.map( (product) => ({
      params: { 
        productId: product.id.toString()
      }
    }))

    return { 
      paths, 
      fallback: true
    }
  } catch (error) {
    return { error }
  }
}
    
export async function getStaticProps( {params} ) {
  try {
    const product = await getProduct(params.productId)

    return {
      props: { product },
      revalidate: 1
    }
  } catch (error) {
    return { error }
  }
}
    

export default function Product({ product }) {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <Head>
        <title>Next App</title>
        <meta name="description" content="A sample next app" />
      </Head>
      
      <h1>Product Details</h1>
      <div>
          <h3>Id: {product.id}</h3>
          <h3>Name: {product.name}</h3>
      </div>
      
      <h3><Link href='/'><a>Back to Home</a></Link></h3>

    </div>
  )
}