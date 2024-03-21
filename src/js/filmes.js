
export async function getFilmes (){
    const url = 'http://localhost:8080/v2/acmefilmes/filmes'
    const response = await fetch (url)
    const data = await response.json()

    return await data.filmes
}

export async function getFilme (id) {
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
    const response = await fetch (url)
    const data = await response.json()

    return data.filme[0]
}

export async function postFilme (filme) {
    const url = `http://localhost:8080/v2/acmefilmes/filme`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify (filme)
    }
    
const response = await fetch(url, options)
return response.ok
}

export async function putFilme (filme) {
    //trocar a url para a do put
    const url = `http://localhost:8080/v2/acmefilmes/filme`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify (filme)
    }
    
const response = await fetch(url, options)
return response.ok
}

export async function deleteFilme (id) {
    //trocar a url para a do put
    const url = `http://localhost:8080/v2/acmefilmes/filme`
    const options = {
        method: 'DELETE',
    }
    
const response = await fetch(url, options)
return response.ok
}

