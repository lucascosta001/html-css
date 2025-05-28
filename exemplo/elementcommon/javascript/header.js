// let hum = `Exemplo de Header Comum`
// console.log(hum);
// window.Document.getelementbytagname(`header`)[0].innerHTML =  Header();
// This function defines a reusable header component for a website.
// It includes a title, description, and navigation links for Home, About, and Contact sections.
function Header() {
  document.getElementsByTagName("header")[0].innerHTML = `
    <h1>Exemplo de Header Comum</h1>
    <p>este site tem o intuito de testar deixar uma parte do html ser usada por outros sites</p>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="teste.html">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
        </ul>
    </nav>
`;
}

function footer(){
  document.getElementsByTagName("footer")[0].innerHTML = `<p>&copy; 2023 Exemplo de Elemento Comum</p>`;
}

// 

window.onload = function() {
  Header();
  
  footer();
};