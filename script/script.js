const adviceContent = document.querySelector(".adviceContent");
const adviceNumber = document.querySelector(".adviceNo");

function getAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then(({ slip: { id, advice } }) => {
      adviceContent.classList.remove("errorClass");
      adviceNumber.innerHTML = `ADVICE #${id}`;
      adviceContent.innerHTML = `"${advice}"`;
      document.documentElement.style.setProperty("--fontSize", "28px");
      if (advice.length > 80) {
        document.documentElement.style.setProperty("--fontSize", "22px");
      }
    })
    .catch(() => {
      adviceContent.innerHTML =
        "Page has encountered an error. Please try again later.";
      adviceNumber.innerHTML = "";
      adviceContent.classList.add("errorClass");
    });
}

document.querySelector(".diceImage>img").addEventListener("click", getAdvice);
