import axios from 'axios'

export async function getAllProducts() {
  try {
    const res = await axios.get(`https://www.fruityvice.com/api/fruit/all`)
    return res.data
  } catch (error) {
    return { error }
  }
  
}

export async function getProduct(productId) {
  try {
    const res = await axios.get(`https://www.fruityvice.com/api/fruit/${productId}`)
    return res.data
  } catch (error) {
    return { error }
  }
  
}

