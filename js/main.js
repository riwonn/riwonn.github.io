
// html 파일에서 module로 불러오면 함수 바깥에다가 변수 선언을 해도 전역변수가 아님.
// import { data } from './imgList.js';
import { ProjectView } from './ProjectView.js';

let projectMenuElem;
let projectView;


function setElems() {
    projectMenuElem = document.querySelector('.btn-menu');
    // console.log(projectMenuElem);
}

window.addEventListener('load', () => {
	setElems();
    // menu pannel
    projectMenuElem.addEventListener('click', e => {
    console.log(e.target);
    if (e.target.classList.contains('btn-menu')) {
        projectView.show();
    }
    }); 

    // 이 변수를 활용하여 projectView 인스턴스 객체 사용하기
    projectView = new ProjectView();
});

// 스크롤 애니메이션
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      } else {
        entry.target.style.opacity = 0;
      }
    });
  });
  
  let opacityTrans = document.querySelectorAll('article');
  
  for (let element of opacityTrans) {
    observer.observe(element);
  }
  
// 페이지 최상단 버튼 go to top
const btnTop = document.querySelector('.btn-go-top');

btnTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// 이미지 최상단 버튼 트렌지션 go to top
const h2 = document.querySelector('.h2');

btnTop.addEventListener('mouseenter', () => {
    if(window.innerWidth < 843){
        h2.style.display = 'block';
        h2.style.opacity = '1';
        btnTop.style.padding = '14px 24px';
    }else{
        h2.style.display = 'block';
        h2.style.opacity = '1';
        btnTop.style.padding = '12px 20px';
    }
});

btnTop.addEventListener('mouseleave', () => {
    if(window.innerWidth < 843){
        h2.style.display = 'none';
        h2.style.opacity = '0';
        btnTop.style.padding = '14px';
    }else{
        h2.style.display = 'none';
        h2.style.opacity = '0';
        btnTop.style.padding = '12px';
    }
});

  
// 스크롤 이벤트 핸들러
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      btnTop.style.display = 'flex';
      btnTop.style.opacity = '1';
    } else {
      btnTop.style.opacity = '0';
      setTimeout(function () {
        btnTop.style.display = 'none';
      }, 300);
    }
  });

// 스크롤 시 매뉴
const menu = document.querySelector('.menu-dark');
const menuSmall = document.querySelector('.menu-dark.small');
// const menuExtra = document.querySelector('.notWork-btns');
// const menuExtraBg = document.querySelector('.bg-trans');


let preScrollTop = 0;

window.addEventListener('scroll',() => {
    let nextScrollTop = window.scrollY;
  
  if(preScrollTop < nextScrollTop) {
    menu.style.transform = 'translate(-50%, -150%)';
    menuSmall.style.transform = 'translate(-50%, -150%)';
    // menuExtra.style.opacity = '0';
    // menuExtraBg.style.top = '-10%';
    }
  else { // (preScrollTop > nextScrollTop)
    menu.style.transform = 'translate(-50%, 0)';
    menuSmall.style.transform = 'translate(-50%, 0%)';
    // menuExtra.style.opacity = '100';
    // menuExtraBg.style.top = '0%';
    }
  preScrollTop = nextScrollTop;
});


// 마우스 호버 시 배경색 바뀌는 코드
// const bgMain = document.querySelector('.container-main');
// const btnPersona1 = document.querySelector('.persona:nth-child(1)');
// const btnPersona2 = document.querySelector('.persona:nth-child(2)');
// const btnPersona3 = document.querySelector('.persona:nth-child(3)');

// btnPersona1.addEventListener('mouseenter',() => {
//   bgMain.style.background = '#628061';
//   bgMain.style.transition = 'background .3s ease-in-out';
//   btnPersona1.style.backgroundImage = 'url("/img/img_persona_1_hover.webp")';
//   // btnPersona1.style.transform = 'translate(-20%, -8%)';
//   // btnPersona1.style.transform = 'scale(105%)';
// })
// btnPersona1.addEventListener('mouseleave',() => {
//   bgMain.style.background = 'none';
//   bgMain.style.transition = 'background .3s ease-in-out';
//   btnPersona1.style.backgroundImage = 'url("/img/img_persona_1.webp")';
//   // btnPersona1.style.transform = 'translate(-20%, -8%)';
//   // btnPersona1.style.transform = 'scale(100%)';

// })

// btnPersona2.addEventListener('mouseenter',() => {
//   bgMain.style.background = '#d3d69f';
//   bgMain.style.transition = 'background .3s ease-in-out';
//   btnPersona2.style.backgroundImage = 'url("/img/img_persona_2_hover.webp")';
//   // btnPersona2.style.transform = 'translate(-10%, -10%)';
//   // btnPersona2.style.transform = 'scale(105%)';
// })
// btnPersona2.addEventListener('mouseleave',() => {
//   bgMain.style.background = 'none';
//   bgMain.style.transition = 'background .3s ease-in-out';
//   btnPersona2.style.backgroundImage = 'url("/img/img_persona_2.webp")';
//   // btnPersona2.style.transform = 'translate(-10%, -10%)';
//   // btnPersona2.style.transform = 'scale(100%)';
// })

// btnPersona3.addEventListener('mouseenter',() => {
//   bgMain.style.background = '#72a7c4';
//   bgMain.style.transition = 'background .3s ease-in-out';
//   btnPersona3.style.backgroundImage = 'url("/img/img_persona_3_hover.webp")';
//   // btnPersona3.style.transform = 'translate(-20%, -40%)';
//   // btnPersona3.style.transform = 'scale(105%)';
// })
// btnPersona3.addEventListener('mouseleave',() => {
//   bgMain.style.background = 'none';
//   bgMain.style.transition = 'background .3s ease-in-out';
//   btnPersona3.style.backgroundImage = 'url("/img/img_persona_3.webp")';
//   // btnPersona3.style.transform = 'translate(-20%, -40%)';
//   // btnPersona3.style.transform = 'scale(100%)';
// })

// 카드 설명 켜짐 꺼짐
// const itemCards = document.querySelectorAll('.card-img');
// const titles = document.querySelectorAll('.card-title');
// const infos = document.querySelectorAll('.card-info');

// itemCards.forEach((itemCard, index) => {
//   itemCard.addEventListener('mouseenter', () => {
//     titles[index].style.opacity = '1';
//     infos[index].style.opacity = '1';
//   });

//   itemCard.addEventListener('mouseleave', () => {
//     titles[index].style.opacity = '0';
//     infos[index].style.opacity = '0';
//   });
// });

// 컬러 스위치 버튼
// light

function changeColor() {
  var btnDown = document.querySelector('.down');

  var colorWhite = body.style.backgroundColor;

  var bigMenu = document.getElementById('bigMenuDark');
  var smallMenu = document.getElementById('smallMenu');

  if (colorWhite === 'rgb(238, 238, 241)') {
    // 바꿀 색상
    btnDown.style.backgroundImage = 'url("../img/btn_scrolldown_light.svg")';
  } else {
    // 기존 색상
    btnDown.style.backgroundImage = 'url("../img/btn_scrolldown.svg")';
  }
}
