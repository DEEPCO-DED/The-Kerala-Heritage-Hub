//CSS
const style = document.createElement('style');
style.innerHTML = `
  #goTopBtn {
    display: none;
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 9999;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: none;
    background-color: #378ADD;
    color: white;
    font-size: 26px;
    cursor: pointer;
    animation: morph 2s ease-in-out infinite;
    transition: transform 0.15s ease;
    outline: none;
  }

  #goTopBtn:hover {
    animation: none;
    border-radius: 30%;
    transform: scale(1.12);
    background-color: #185FA5;
    box-shadow: 0 6px 20px rgba(55,138,221,0.45);
  }

  #goTopBtn:active {
    transform: scale(0.92);
  }

  @keyframes morph {
    0%, 100% { border-radius: 50%; }
    25%  { border-radius: 60% 40% 55% 45% / 45% 55% 45% 55%; }
    50%  { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    75%  { border-radius: 45% 55% 40% 60% / 55% 45% 55% 45%; }
  }
`;
document.head.appendChild(style);

// Inject Button
document.body.insertAdjacentHTML('beforeend', `
  <button id="goTopBtn" title="Go to top">&#8679;</button>
`);

// Logic
const goTopBtn = document.getElementById("goTopBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 300) {
    goTopBtn.style.display = "block";
  } else {
    goTopBtn.style.display = "none";
  }
};

goTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};