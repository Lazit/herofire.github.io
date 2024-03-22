window.addEventListener('scroll', function() {
    const wh = window.scrollY;      // 현재 스크롤 위치 저장
    // console.log(wh)
    const p1lbox = document.querySelector('.p1-l-box'); // .p1text 요소 선택
    const p1rbox = document.querySelector('.p1-r-box'); // .p1text 요소 선택
  
    // 스크롤 위치가 400px 이상이면 애니메이션 효과 추가
    if (wh > 300) {
        p1lbox.classList.add('fade-in-bottom');
        p1rbox.classList.add('fade-in-bottom');
    }
  });




//사진 슬라이드
const images = ["intro1.jpg", "intro2.jpg", "intro3.jpg", "intro4.jpg", "intro5.jpg"];
let currentIndex = 0;
const container = document.querySelector(".slideshow-container");
const imgElement = document.querySelector(".image");
let timeout;

function changeImage(direction) {
  clearTimeout(timeout);
  
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  imgElement.src = images[currentIndex];
  timeout = setTimeout(autoSlideShow, 5000);
}

function autoSlideShow() {
  changeImage(1);
}

changeImage(0);
imgElement.style.display = "block";
autoSlideShow();


