async function infoFilmes (filme)
{
    const capaFilme = document.createElement('img')
    capaFilme.src = filme.foto_capa
    const titulo = document.createElement('h2')
    titulo.textContent = `${filme.nome}`
    const duracao = document.createElement('p')
    duracao.textContent =`${filme.duracao}`
 
    

}