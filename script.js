alert("javascript 動いた！");
const button = document.querySelector("#changeButton");
const text = document.querySelector(".text");
const originalHTML = text.innerHTML;
button.addEventListener("click", function () {
  if (text.textContent.includes("私は専門学生です。")) {
    text.textContent = "web系志望です。";
  } else {
    text.innerHTML = originalHTML;
  }
  text.classList.add("skyblue");
});
