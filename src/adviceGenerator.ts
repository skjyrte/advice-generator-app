type ApiResponse = {
  slip: {
    advice: string;
    id: number;
  };
};

const adviceContent = document.querySelector(
  ".adviceBox__adviceContent"
) as HTMLParagraphElement;
const adviceNumber = document.querySelector(
  ".adviceBox__adviceNumber"
) as HTMLParagraphElement;

const getAdvice = async () => {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", {
      cache: "no-cache",
    });
    const responseObj: ApiResponse = await response.json();
    const {slip} = responseObj;
    const {id, advice} = slip;
    adviceContent.classList.remove("adviceBox__adviceContent_error");
    adviceNumber.innerHTML = `ADVICE #${id}`;
    adviceContent.innerHTML = `"${advice}"`;
    adviceContent.classList.remove("adviceBox__adviceContent_textSize");
    if (advice.length > 80) {
      adviceContent.classList.add("adviceBox__adviceContent_textSize");
    }
  } catch (e) {
    adviceContent.innerHTML = "We have an error. Please try again later.";
    adviceNumber.innerHTML = "";
    adviceContent.classList.add("adviceBox__adviceContent_error");
  }
};

const diceImage = document.querySelector(
  ".adviceBox__diceImageButton"
) as HTMLImageElement;
diceImage.addEventListener("click", getAdvice);
