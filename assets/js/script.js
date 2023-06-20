const checkMenu = document.getElementById('mobile-menu-check');
const hamburguer = document.getElementById('hamburguer-lines')
const navbar = document.getElementById('navbar')

checkMenu.addEventListener("change", () => {
    if (checkMenu.checked) {
        navbar.classList.add('active')
    } else {
        navbar.classList.remove('active')
    }
})

window.addEventListener('scroll', function () {
    var secoes = document.querySelectorAll('section'); // Seleciona todas as seções
    var menuItens = document.querySelectorAll('.nav-link'); // Seleciona os itens do menu

    secoes.forEach(function (secao, index) {
        var secaoPosicao = secao.getBoundingClientRect();

        // Verifica se a seção está próxima ao topo da página
        if (secaoPosicao.top >= 0 && secaoPosicao.top <= 100) {
            // Remove a classe "active" de todos os itens do menu
            menuItens.forEach(function (item) {
                item.classList.remove('active');
            });

            // Adiciona a classe "active" ao item de menu correspondente à seção atual
            menuItens[index].classList.add('active');
        }
    });
});
