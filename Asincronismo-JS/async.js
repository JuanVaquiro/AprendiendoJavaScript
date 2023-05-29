import fetch from 'node-fetch'

const API = 'https://api.escuelajs.co/api/v'

async function getAsync(urlApi) {
  const response = await fetch(urlApi)
  const data = await response.json()
  return data
}

const anohterFn = async (API) => {
  try {
    const products = await getAsync(`${API}/products`)
    const items = await getAsync(`${API}/products/${products[0].id}`)
    const category = await getAsync(`${API}/categories/${items.category.id}`)

    console.log(products)
    console.log(items.title)
    console.log(category.name)
  } catch (error) {
      throw new Error('API Not Found');
  }
}

anohterFn(API)