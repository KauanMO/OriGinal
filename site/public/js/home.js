document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    document.getElementById("logo-header").style.opacity = "1";
    document.getElementById("scroll-icon").style.opacity = "1";
    setTimeout(() => {
      document.getElementById("a-home").style.opacity = "1";
      setTimeout(() => {
        document.getElementById("a-personagens").style.opacity = "1";
        setTimeout(() => {
          document.getElementById("a-desenvolvedor").style.opacity = "1";
          setTimeout(() => {
            document.getElementById("a-quiz").style.opacity = "1";
          }, 200);
        }, 200);
      }, 200);
    }, 1000);
  }, 1000);
});

window.onscroll = () => {
  if (window.scrollY > window.innerHeight) {
    nav.classList.add('active')
    navItens.classList.add('active-item')
    document.getElementById('naru-e-ori').classList.add('imgCome')
    setTimeout(() => {
      document.getElementById('ori-e-ku').classList.add('imgCome')
    }, 100);
    setTimeout(() => {
      document.querySelectorAll('.txtJogo').forEach(element => {
        element.classList.add('popin')
      });
    }, 500);

  } else {
    nav.classList.remove('active')
    navItens.classList.remove('active-item')
    document.getElementById('naru-e-ori').classList.remove('imgCome')
    setTimeout(() => {
      document.getElementById('ori-e-ku').classList.remove('imgCome')
    }, 100);
    document.querySelectorAll('.txtJogo').forEach(element => {
      element.classList.remove('popin')
    });
  }
};
