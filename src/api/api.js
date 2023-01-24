async function fetch_all_pages(url){
    let vaiindo = true
    let result = []
    let page = 1
    while(vaiindo){
        const response = await fetch(`${url}?page=${page}`)
        const tmpitems = await response.json()
        if(tmpitems.length > 0){
            result = result.concat(tmpitems)
            page++
        } else {
            vaiindo = false
        }
    }
    return result
}
export const api = {
    async search_users(searchstring){
        const url = `https://api.github.com/search/users?q=${searchstring}`
        const response = await fetch(url)
        return await response.json()
    },
    async lista_repos(username){
        const url = `https://api.github.com/users/${username}/repos`
        const data = await fetch_all_pages(url)
        return data
    },
    async listaIssues(owner, name, page) {
        const url = `https://api.github.com/repos/${owner}/${name}/issues?page=${page}`
        const response = await fetch(url)
        return await response.json()
    },
    async listaContent(owner, name) {
        const url = `https://api.github.com/repos/${owner}/${name}/contents`
        const response = await fetch(url)
        return await response.json()
    },
    async abreDir(owner,name, diretorio){
        const url = `https://api.github.com/repos/${owner}/${name}/contents/${diretorio}`;
        const response = await fetch(url);
        return await response.json();
        },
}
