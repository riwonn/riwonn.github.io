$(document).ready(function() {
  var projects = [];

  // 프로젝트 리스트 정의
  if (window.location.href.indexOf("project1.html") > -1) {
    projects = [
      {
        src: '../img/img_thum_2.webp',
        title: "Ko-Ling | AR Language game app",
        // desc: "Description of Project 2",
        info: "2021",
        url: "project2.html"
      },
      {
        src: '../img/img_thum_3.webp',
        title: "OUNCE | Cat food tracking app",
        // desc: "Description of Project 3",
        info: "2020",
        url: "project3.html"
      }
    ];
  } else if (window.location.href.indexOf("project2.html") > -1) {
    projects = [
      {
        src: '../img/img_thum_1.webp',
        title: "D-RUN | Health care running app, based on NFT",
        // desc: "Description of Project 1",
        info: "2022 - 2023",
        url: "project1.html"
      },
      {
        src: '../img/img_thum_3.webp',
        title: "OUNCE | Cat food tracking app",
        // desc: "Description of Project 3",
        info: "2020",
        url: "project3.html"
      }
    ];
  } else if (window.location.href.indexOf("project3.html") > -1) {
    projects = [
      {
        src: '../img/img_thum_1.webp',
        title: "D-run | Health care running app, based on NFT",
        // desc: "Description of Project 1",
        info: "2022 - 2023",
        url: "project1.html"
      },
      {
        src: '../img/img_thum_2.webp',
        title: "Ko-Ling | AR Language game app",
        // desc: "Description of Project 2",
        info: "2021",
        url: "project2.html"
      }
    ];
  }

  // 썸네일 리스트 생성
  for (var i = 0; i < projects.length; i++) {
    (function(index) {
      var item = $("<div class='card-half'></div>");
      var link = $("<a href='" + projects[index].url + "' class='main-img-project-half'></a>");
      link.css("background-image", "url(" + projects[index].src + ")");
      item.append(link);

      var title = $("<div class='card-title half white'>" + "<div class='body1'>" + projects[index].title + "</div>" + "<div class='caption'>" + projects[index].info + "</div>"  + "</div>");
      item.append(title);

      $(".card-column").append(item);
    })(i);
  }
});




// // 설정한 비밀번호
// var password = "1234";

// // 비밀번호 입력 함수
// function enterPassword() {
//   var input = document.getElementById("passwordInput").value;
//   if (input === password) {
//     unlockPage();
//   } else {
//     alert("The password is incorrect.");
//   }
// }

// // 페이지 잠금 해제 함수
// function unlockPage() {
//   document.getElementById("lockedContent").style.display = "none";
//   document.getElementById("unlockedContent").style.display = "block";
// }

// // 비밀번호 입력 요소 가져오기
// var passwordInput = document.getElementById("passwordInput");
// var enterButton = document.getElementById("enterButton");

// // 버튼에 클릭 이벤트 추가
// enterButton.addEventListener('click', enterPassword);


// // 비밀번호 입력 요소 가져오기
// var passwordInput = document.getElementById("passwordInput");
// var enterButton = document.getElementById("enterButton");

// // 입력값이 변경될 때마다 버튼 상태 업데이트
// passwordInput.addEventListener('input', function() {
//   var input = passwordInput.value;
//   if (input.trim().length > 0) {
//     enterButton.disabled = false;
//   } else {
//     enterButton.disabled = true;
//   }
// });

// // 페이지 로드 시 버튼 상태 업데이트
// window.addEventListener('load', function() {
//   enterButton.disabled = true;
// });


// const backButton = document.querySelector('.btn-back');

// backButton.addEventListener('click', () => {
//   history.back();
// });
