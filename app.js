calcBmi = () => {
  const height = document.querySelector("#height").value;
  const weight = document.querySelector("#weight").value;
  const heightSq = height * height;
  const output = document.querySelector(".output");
  const message = document.querySelector(".message");

  let result = Math.floor((weight / heightSq) * 10000);
  output.innerText = "Your BMI is " + result;
  if (height === "" || weight === "") {
    message.innerText = " Please complete  all fields";
    output.innerText = "";
  }

  if (result < 18) {
    message.innerText = "Your result suggests you are underweight";
    message.style.color = "blue";
  }
  if (result > 18 && result <= 25) {
    message.innerText = "Your result suggests you are a healthy weight";
    message.style.color = "green";
  }
  if (result > 25 && result <= 30) {
    message.innerText = "Your result suggests you are overweight";
    message.style.color = "orange";
  }
  if (result > 30) {
    message.innerText = "Your result suggests you are obese";
    message.style.color = "red";
  }
};

const button = document.querySelector("#btn");
button.addEventListener("click", calcBmi);
