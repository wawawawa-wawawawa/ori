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



const text = `かって報道の世界で“真実”を歪めた男、神崎遼。
その過去は、彼のキャリアだけでなく、人の人生すら狂わせた。
ある日、彼のもとに一件の依頼が届く。
3年前に忽然と姿を消した女性一一相沢慶子の失踪事件。
依頼主は妹の美咲だった。
警察はすでに捜査を打ち切り、事件は“未解決”として処理されている。
だが、美咲は言う。
「姉は、自分から消えるような人じゃない」
神崎は半信半疑のまま調査を開始する。
残されていたのは、断片的な日記と、意味不明な記述の数々。
ーー「見られている」
--「ここから出られない」
やがて浮かび上がるのは、慶子が通っていたとされる精神科医・瀬川の存在。
しかし彼は多くを語らず、ただ静かに言う。
「記憶は、必ずしも事実とは限りません」
さらに、事件を担当していた刑事・黒田は、神崎の過去を理由に調査を牽制する。
「お前に真実を追う資格があるのか？」
調査が進むにつれ、不可解な共通点が浮かび上がる。
複数の証言に現れる“同じ男”。
どの監視カメラにも映り込む、顔の判別できない存在ーー「X」。
そして、美咲の証言にも、わずかな“ズレ”が生じ始める。
失踪か、事件か、それともーー。
すべての証言が食い違うとき、神崎が辿り着く"真実”とは何か。
これは、閉ざされた記憶の中に潜む、“誰も見たことのない結末”の物語。`;

const target = document.getElementById("typing");

let i = 0;
let started = false; // ← 重要（1回だけ実行するため）

function typeWriter() {
  if (i < text.length) {

    if (text[i] === "\n") {
      target.innerHTML += "<br>";
    } else {
      target.innerHTML += text[i];
    }

    i++;
    setTimeout(typeWriter, 35);
  }
}

// スクロール監視
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !started) {
      started = true;   // 二重実行防止
      typeWriter();
    }
  });
}, {
  threshold: 0.4 // 40%見えたら開始
});

observer.observe(document.querySelector(".intro-text"));
