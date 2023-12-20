function AosConfig() {
    const width = window.innerWidth;
  
    if (width > 1024) {
        AOS.init({
            disable:false
        });
    }else{
        AOS.init({
            disable:true
        })
    }
  }
  function checkScreenWidth(mq) {
    if (mq.matches) {
      // Chama a função apenas se a largura da tela estiver dentro da faixa desejada
      AosConfig();
    }
}
  var mediaQuery = window.matchMedia(
    "(max-width: 2100px)"
  );
  checkScreenWidth(mediaQuery);
  mediaQuery.addEventListener("resize", checkScreenWidth);