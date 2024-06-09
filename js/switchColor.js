// 컬러 스위치 버튼
// light

function changeColor() {
  var body = document.querySelector('body');
  var body0 = document.querySelectorAll('.body0');
  var body1 = document.querySelectorAll('.body1');
  var body2 = document.querySelectorAll('.body2');
  var h1 = document.querySelectorAll('.h1');
  var captions = document.querySelectorAll('.caption');
  var btnSwitch = document.querySelector('.img-switch');
  var span = document.querySelectorAll('span');
  var borders = document.querySelectorAll('.border-d');
  var menuLink = document.querySelectorAll('.menu-link');
  var btnBehance = document.querySelectorAll('.btn_behance');
  var btnLinkedin = document.querySelectorAll('.btn_linkedin');
  var btnBlog = document.querySelectorAll('.btn_blog');
  // var circle = document.querySelectorAll('.main-point');
  var project = document.querySelectorAll('.project');

  var colorWhite = body.style.backgroundColor;

  var bigMenu = document.getElementById('bigMenuDark');
  var smallMenu = document.getElementById('smallMenu');

  if (colorWhite === 'rgb(248, 248, 251)') {
    // 바꿀 색상
    body.style.backgroundColor = '#20202D';
    body.style.color = '#F8F8FB';

    btnSwitch.style.backgroundColor = 'rgba(167, 166, 187, .5)';
    btnSwitch.style.backgroundImage = 'url("../img/btn_switch_dark.svg")';

    borders.forEach((border) => {
      border.style.backgroundColor = '#49495A';
    });

      body0.forEach((body0) => {
      body0.style.color = '#F8F8FB';
    });

    body2.forEach((body2) => {
      body2.style.color = '#D6D6E3';
    });

    body1.forEach((body1) => {
      body1.style.color = '#F8F8FB';
    });

    h1.forEach((h1) => {
      h1.style.color = '#F8F8FB';
    });

    captions.forEach((caption) => {
      caption.style.color = '#A7A6BB';
    });

    menuLink.forEach((menuLink) => {
      menuLink.style.color = '#F8F8FB';
    });

    span.forEach((span) => {
      span.style.color = '#F8F8FB';
    });

    // circle.forEach((circle) => {
    //   circle.style.border = '1px solid #F8F8FB';
    // })

    // project.forEach((project) => {
    //   project.style.border = '1px solid #F8F8FB';
    // })

    var style = document.createElement('style');
    style.type = 'text/css';

    btnBehance.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_behance_dark.svg")';
    });
    btnLinkedin.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_linkedin_dark.svg")';
    });
    btnBlog.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_blog_dark.svg")';
    });

    bigMenu.classList.replace('menu-light', 'menu-dark');
    smallMenu.classList.replace('menu-light', 'menu-dark');
  } else {
    // 기존 색상
    body.style.backgroundColor = '#F8F8FB';
    body.style.color = '#20202D';

    btnSwitch.style.backgroundColor = 'hsla(240, 17%, 15%, .1)';
    btnSwitch.style.backgroundImage = 'url("../img/btn_switch_light.svg")';

    borders.forEach((border) => {
      border.style.backgroundColor = '#49495A';
    });

    body0.forEach((body0) => {
      body0.style.color = '#20202D';
    });

    body2.forEach((body2) => {
      body2.style.color = '#20202D';
    });

    body1.forEach((body1) => {
      body1.style.color = '#20202D';
    });

    h1.forEach((h1) => {
      h1.style.color = '#20202D';
    });

    captions.forEach((caption) => {
      caption.style.color = '#7D7D90';
    });

    menuLink.forEach((menuLink) => {
      menuLink.style.color = '#20202D';
    });

    span.forEach((span) => {
      span.style.color = '#20202D';
    });

    // circle.forEach((circle) => {
    //   circle.style.border = '1px solid #20202D';
    // })

    // project.forEach((project) => {
    //   project.style.border = '1px solid #C0C0CE';
    // })

    var style = document.createElement('style');
    style.type = 'text/css';

    btnBehance.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_behance_light.svg")';
    });
    btnLinkedin.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_linkedin_light.svg")';
    });
    btnBlog.forEach((btn) => {
      btn.style.backgroundImage = 'url("/img/btn_main_blog_light.svg")';
    });

    bigMenu.classList.replace('menu-dark', 'menu-light');
    smallMenu.classList.replace('menu-dark', 'menu-light');
  }
}
