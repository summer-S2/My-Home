// /* 체크박스 클릭시 */
// .header__menu-btn:checked {
//   background-color: var(--color-dark);
// }

const body = document.querySelector("body");
const header__menu_btn = document.querySelector(".header__menu-btn");
const header__nav = document.querySelector(".header__nav");
const menu_svg = document.querySelector("#menu_svg");
const movetopbt = document.querySelector("#movetopbt");

// console.log(document.documentElement.scrollTop);
// console.log(document.querySelector('html').scrollTop);

// 모바일용 헤더 내비 메뉴버튼 SVG 색상 토글하는 함수
function change_color_menu() {
  if (menu_svg.style.fill === "rgb(58, 152, 185)") {
    menu_svg.style.fill = "#FFF";
  } else {
    menu_svg.style.fill = "#3A98B9";
  }
}

// 헤더 메뉴버튼 스타일 토글
header__menu_btn.addEventListener("click", (event) => {
  header__nav.classList.toggle("hidden");
  header__menu_btn.classList.toggle("bg-change");

  change_color_menu();
});

// 내비 요소 클릭하면 지우기
header__nav.addEventListener("click", (event) => {
  header__nav.classList.add("hidden");
  header__menu_btn.classList.remove("bg-change");

  change_color_menu();
});

// 스크롤 내리면 top버튼 띄우기
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    movetopbt.classList.remove("display-hidden");
  } else {
    movetopbt.classList.add("display-hidden");
  }
}

// top버튼 클릭하면 맨 위로 이동
function topFunction() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

// window.addEventListener("scroll", (event) => {
//   let scrollY = this.scrollY;
//   console.log(scrollY);

//   if (scrollY >= 0) {
//     document.querySelector(".about_container").style.animation = '2s text-up';
//     document.querySelector(".about_container").classList.remove('display-hidden');

//   }
//   if (scrollY >= 500) {
//     document.querySelector(".skills_container").style.animation = '2s text-up';
//     document.querySelector(".skills_container").classList.remove('display-hidden');
//   }
// });

// 스크롤 애니메이션
// root
// 어떤 요소를 기준으로 target이 들어오고 나가는 것을 확인할지 지어 기본은 브라우저(viewport)
// rootMargin
// root의 범위를 확장, 축소 할 수 있습니다.
// threshold
// target과 root의 교차가 얼마나 일어나야 callback 함수를 실행할지 지정 (기본은 0, 0.0 -> target이 진입을 시작 , 1.0 -> target이 전부 들어 옴)
// Entries
// 관찰되고 있는 객체 리스트를 반환
// Observer
// 콜백함수가 호출되는 IntersectionObserver의 참조객체
const options = {
  root: null, // viewport
  rootMargin: "0px",
  threshold: 0.1, // 30%가 viewport에 들어와 있어야 callback 실행
};

const observer = new IntersectionObserver((entries) => {
  // 관찰 중인 배열 형식의 객체 리스트
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
}, options);

const scrollList = document.querySelectorAll(".scroll_container");

scrollList.forEach((el) => observer.observe(el));

// 프로젝트 상세페이지 스킬 토글 버튼
function skillToggle(el) {
  const item = el.nextElementSibling; // 클릭한 버튼 아래 엘리먼트

  item.classList.toggle("max-h-0");
  item.classList.toggle("max-h-40");
  el.classList.toggle("active");
}
