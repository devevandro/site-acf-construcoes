//scrool suave entre as páginas
$('nav a').click(function (e) {
    e.preventDefault();

    var $id = $(this).attr('href'), $targetOffSet = $($id).offset().top, $menuHeight = $('nav').innerHeight();

    $('body, html').animate({
        scrollTop: $targetOffSet - ($menuHeight + 30)
    }, 900);
});

//escondendo o menu
function menu() {
    var $menu = document.getElementById('teste');

    if ($menu.classList.value === 'esconde') {
        $menu.classList.remove('esconde');
        $menu.classList.add('header-menu-mobile');
    } else {
        $menu.classList.remove('header-menu-mobile');
        $menu.classList.add('esconde');
    }
}

//pegando ano atual para o footer
var $ano = new Date;
$ano = $ano.getFullYear();

document.getElementById('footer-ano').innerHTML = $ano;

//modal contato
function iniciaModalContato() {
    var $form = document.getElementById('contato-modal');
    var $aberto = false;

    if($form.classList.value === 'esconder-modal') {
        $form.classList.remove('esconder-modal');
        $form.classList.add('form-contato');
        
        $aberto = true;
    }/*  else {
        $form.classList.remove('esconder-modal');
        $form.classList.add('form-contato');
    } */

    if(!$aberto) {
        $form.classList.remove('form-contato');
        $form.classList.add('esconder-modal');

        $aberto = false;
    }
}
