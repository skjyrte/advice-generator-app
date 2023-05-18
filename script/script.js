function getAdvice() {
  fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
    .then((response) => response.json())
    .then((obj) => obj.slip)
    .then((obj) => obj)
    .then((obj) => {
      document.querySelector(".adviceContent").classList.remove("errorClass");
      document.querySelector(".adviceNo").innerHTML = `ADVICE #${obj.id}`;
      document.querySelector(".adviceContent").innerHTML = `"${obj.advice}"`;
      document.documentElement.style.setProperty("--fontSize", "28px");
      if (obj.advice.length > 80) {
        document.documentElement.style.setProperty("--fontSize", "22px");
      }
    })
    .catch(() => {
      document.querySelector(".adviceContent").innerHTML =
        "Page has encountered an error. Please try again later.";
      document.querySelector(".adviceNo").innerHTML = "";
      document.querySelector(".adviceContent").classList.add("errorClass");
    });
}

document.querySelector(".diceImage>img").addEventListener("click", getAdvice);
