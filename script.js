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

// IntersectionObserver を使ったスクロール時フェードイン
document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade').forEach((el, i) => {
    // optional stagger
    el.style.transitionDelay = `${i * 80}ms`;
    observer.observe(el);
  });
});

