TopScroll = window.pageYOffset || document.documentElement.scrollTop;
(LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
  (window.onscroll = function () {
    window.scrollTo(LeftScroll, TopScroll);
  });
const loader = document.querySelector("#loader");
window.onload = function () {
  loader.classList.add("display-none");
  document.querySelector(".header").classList.add("animate__fadeInDown");
  document.querySelector(".left_side").classList.add("animate__fadeInLeft");
  document.querySelector(".right_side").classList.add("animate__fadeInRight");
  window.onscroll = function () {};
};
const textArray = [
  // input text for typing
  "Photographer",
  "Photo Editor",
  "Video Editor",
  "Content Creator",
  "Student",
];
const typingDelay = 100; //typing speed
const erasingDelay = 50; //erasing speed
const newTextDelay = 1000; // delay of text and next text
//////  Auto Typing Effect START ///////
const typedTextSpan = document.querySelector("#type_effect");
const cursorSpan = document.querySelector(".cursor");
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});
//////  Auto Typing Effect END ///////
const notice =
  "বাঁশ বাগানের মাথার উপর চাঁদ উঠছে ঐ, লাইফে শুধু বাঁশটা খাইলাম চাঁদটা গেলো কই। দেখেই delete করে দিবা, প্রমিস করো হ্যাঁ হ্যাঁ ১০০বার প্রমিস";
const notice_inner = document.querySelector("#notice_inner");
notice_inner.innerHTML = notice;
