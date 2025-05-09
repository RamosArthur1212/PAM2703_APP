const API_HOST =  'https://dattebayo-api.onrender.com'

export async function fetchPersonagens(){
    try{
        const response = await fetch(`${API_HOST}/characters`)

        if(!response.ok){
            throw new Error(`Erro na requisição: ${response.statusText}`)
        }

       return await response.json();

    }catch(error){
        console.log(`Erro ao buscar personagens: ${error}`)
        return [];
    }
}
