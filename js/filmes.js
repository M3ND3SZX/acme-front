
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
//window.location.reload()
}

export async function putFilme (filme,id) {
    //trocar a url para a do put
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
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
    const url = `http://localhost:8080/v2/acmefilmes/filme/${id}`
    const options = {
        method: 'DELETE',
    }
    
const response = await fetch(url, options)
return response.ok
}


export async function getDiretores (){
    const url = 'http://localhost:8080/v2/acmefilmes/diretor'
    const response = await fetch (url)
    const data = await response.json()

    return await data.diretores
}

export async function getDiretor (id) {
    const url = `http://localhost:8080/v2/acmefilmes/diretor/${id}`
    const response = await fetch (url)
    const data = await response.json()

    return data.diretor[0]
}

export async function deleteDiretor (id) {
    //trocar a url para a do put
    const url = `http://localhost:8080/v2/acmefilmes/diretor/${id}`
    const options = {
        method: 'DELETE',
    }
    
const response = await fetch(url, options)
return response.ok
}

export async function getGeneros (){
    const url = 'http://localhost:8080/v2/acmefilmes/generos'
    const response = await fetch (url)
    const data = await response.json()

    return await data.generos
}

export async function postGenero (genero) {
    const url = `http://localhost:8080/v2/acmefilmes/genero`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify (genero)
    }
    
const response = await fetch(url, options)
return response.ok
}

export async function deleteGenero (id) {
    //trocar a url para a do put
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const options = {
        method: 'DELETE',
    }
    
const response = await fetch(url, options)
return response.ok
}

export async function putGenero(id,genero) {
    //trocar a url para a do put
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify (genero)
    }


    
const response = await fetch(url, options)
return response.ok
}

export async function getGenero (id) {
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const response = await fetch (url)
    const data = await response.json()

    return data.genero[0]
}


