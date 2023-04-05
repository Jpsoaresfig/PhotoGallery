
const baseURL = 'https://api.pexels.com/v1/'
const divPaiImagens = document.getElementById('lugar-imagens')

let index =2
let numberPages =20

async function getAllPhotos() {
    limparDiv()
    const response = await fetch(`${baseURL}/curated?page=${index}&per_page=${numberPages}`, {//esse index quer dizer que página vai usar do lado de 'page'
        headers : {
            Authorization : 'OeUO8UhV3NrRPfjMmDaDlnQgA6EKdiKtX9YyU98IhTAjFe7NVjKhsDSf'
        }
    })
    const data = await response.json()
    
    for(const item of data.photos) {
        const urlImg = item.src.tiny

        const divImg = document.createElement('img')
        divImg.setAttribute('src', urlImg)
        divPaiImagens.appendChild(divImg)
    }
    function limparDiv(){
        divPaiImagens.innerHTML=''
    }
}
getAllPhotos()


function changePage(button){//avançar ou retroceder página 
    if (button === 'proximo'){
        index = index + 1
        console.log(index)
        getAllPhotos()
    }
if(button === 'voltar' && index >=1){
   index = index - 1 
   console.log(index)
   getAllPhotos()
}
}

function mudaNumeroDeFotos(){//selecionar conteudo das páginas
    const selectvalue = document.getElementById('changePage').value
    numberPages = selectvalue
    getAllPhotos()
    console.log(numberPages)
}
