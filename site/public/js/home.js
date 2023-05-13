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

  const obOptions = {
    threshold: 0.5
  }

  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if(entry.target.classList.contains('imgTitleBlindForest')){
          entry.target.style.transform = 'translateX(0)';
        }
        entry.target.style.opacity = '1';
      }
      else{
        if(entry.target.classList.contains('imgTitleBlindForest')){
          entry.target.style.transform = 'translateX(-10rem)';
        }
        entry.target.style.opacity = '0';
      }
    });
  }, obOptions)

  observer.observe(document.querySelector('.imgTitleBlindForest'))
  observer.observe(document.querySelector('.svgBorderLeft'))
  observer.observe(document.querySelector('.svgBorderRight'))
  observer.observe(document.querySelector('.historiaBlindForest div'))

});

window.onscroll = () => {
  if (window.scrollY > (window.innerHeight - ((20*window.innerHeight)/100))) {
    nav.classList.add("active");
    navItens.classList.add("active-item");
    document.getElementById("naru-e-ori").classList.add("imgCome");
    setTimeout(() => {
      document.getElementById("ori-e-ku").classList.add("imgCome");
    }, 100);
    setTimeout(() => {
      document.querySelectorAll(".txtJogo").forEach((element) => {
        element.classList.add("popin");
      });
    }, 500);
  } else {
    nav.classList.remove("active");
    navItens.classList.remove("active-item");
    document.getElementById("naru-e-ori").classList.remove("imgCome");
    setTimeout(() => {
      document.getElementById("ori-e-ku").classList.remove("imgCome");
    }, 100);
    document.querySelectorAll(".txtJogo").forEach((element) => {
      element.classList.remove("popin");
    });
  }
};

function scrollBindFores() {
 document.querySelector('.historiaBlindForest').scrollIntoView({behavior: "smooth"})
}

function scrollWillWisps() {
  document.querySelector('.historiaBlindForest').scrollIntoView({behavior: "smooth"})
}
