function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function criaLinha(usuario) {

}

function login (params) {
    
}

function main() {
    console.log(fazGet("http://192.168.10.200:8086/propriedade/48373"))

}
main()