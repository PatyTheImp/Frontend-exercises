var imageNum = 1;
//Inicia a função mal a página carrega mostrando assim a 1ª imagem
imgMovement(imageNum); 

//Ativado pelas setas
function maisSlide(n) {
    imgMovement(imageNum += n);
}

//Ativado pelos dots inferiores
function slideAtual(n) {
    imgMovement(imageNum = n);
}

function imgMovement(n) {
    //Pelo que percebi isto cria um array com os elementos desta classe
    var img = document.getElementsByClassName("slide");
    var dots= document.getElementsByClassName("bolinhas");

    //Para as imagens circularam
    if (n > img.length) imageNum = 1; //img.length indica quantos elementos o array tem
    if (n < 1) imageNum = img.length;
    
    //Apaga as imagens
    for (var i = 0; i < img.length; i++)
        img[i].style.display = "none";

    //Retira a classe "azul-escuro" das bolinhas
    for (var j = 0; j < dots.length; j++) 
        dots[j].className = dots[j].className.replace(" azul-escuro", "");

    //Mostra a imagem certa na página
    img[imageNum - 1].style.display = "block"; 

    //Adiciona uma classe as bolinhas que está formatada em CSS 
    //para a bolinha ficar azul escura
    dots[imageNum - 1].className += " azul-escuro";
}