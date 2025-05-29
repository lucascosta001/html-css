// let arq = document.getElementsByClassName("secelementos");

// pasta principal
// pegar cada aquivo, porém não são todos que estão listados como index.html, logo vou precisar de um arquivo que busque pelo tipo de arquivo, que é o .html
for (let i = 0; i < arq.length; i++) {
    let arquivo = arq[i].getElementsByTagName("a")[0];
    if (arquivo) {
        let link = arquivo.href;
        if (link.endsWith(".html")) {
            console.log("Arquivo HTML encontrado: " + link);
        } else {
            console.log("Arquivo não é HTML: " + link);
        }
    }
}
