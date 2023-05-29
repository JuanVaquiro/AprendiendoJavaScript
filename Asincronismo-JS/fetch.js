import fetch from 'node-fetch'

const API = 'https://api.escuelajs.co/api/v1'

function fechtData(urlApi) {
    return fetch(urlApi)
}

fechtData(`${API}/products`)
    .then(resp => resp.json())
    .then(products => console.log(products))
    .then(() => console.log('hola'))
    .catch(err => console.log(err))

const getData = async (URL) => {
    const resp = await fetch(URL)
    const data = await resp.json()
    console.log(data)
}

getData(`${API}/products`)


// Fetch POST
function postDATA(URL, data) {
    const response = fetch(
        URL,
        {
            method: 'PUT',
            mode: 'cors',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    )
    return response
}

const data = {
    "title": "Camisa Toons",
    "price": 3333,
    "description": 'Update',
}

let id = 249

postDATA(`${API}/products/${id}`, data)
    .then(response => response.json())
    .then(data => console.log(data))