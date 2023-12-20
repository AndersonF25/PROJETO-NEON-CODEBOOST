function checkScreenWidth(mq) {
  if (mq.matches && window.innerWidth > 1024 && window.innerWidth < 2100) {
    // Chama a função apenas se a largura da tela estiver dentro da faixa desejada
    AOS.init({
      disable: false,
    });
  } else {
    AOS.init({
      disable: true,
    });
  }
}
var mediaQuery = window.matchMedia("(max-width: 2100px)");
checkScreenWidth(mediaQuery);
window.addEventListener("resize", function () {
  checkScreenWidth(mediaQuery);
});