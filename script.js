// ハンバーガーメニュー機能
const hamburger = document.getElementById("hamburger");
const navbarMenu = document.getElementById("navbar-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// メニュー項目クリック時にメニューを閉じる
document.querySelectorAll(".navbar-menu a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbarMenu.classList.remove("active");
  });
});

// スクロール時のフェードイン
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});