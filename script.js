function handlePromptButtonClick() {
  const userInput = prompt("Escribir un mensaje");
  document.getElementById("button-input").textContent = userInput;
}

function handleAddBoxButtonClick() {
  const boxes = document.getElementsByClassName("box");
  const box = boxes[0].cloneNode();
  box.textContent = boxes.length + 1;

  const boxesContainer = document.getElementsByClassName("boxes-container")[0];
  const notABox = boxesContainer.getElementsByClassName("not-a-box")[0];

  boxesContainer.insertBefore(box, notABox);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const name = event.target.querySelector("#name-field").value;
  const surname = event.target.querySelector("#surname-field").value;
  let sex;

  if (event.target.querySelector("#sex-male-option").checked) {
    sex = "male";
  } else if (event.target.querySelector("#sex-female-option").checked) {
    sex = "female";
  }
  const persona = new Persona(name, surname, sex);
  personas.push(persona);

  showPersonas();
}

function handleBoxClick(event) {
  if (event.target.className === "box") {
    alert("Box clicked");
  }
}

function showPersonas() {
  document.getElementById("form-input").textContent = personas;

  const men = personas.filter((persona) => persona.isMale());
  const women = personas.filter((persona) => persona.isFemale());

  document.getElementById("form-input-male-count").textContent = men.length;
  document.getElementById("form-input-female-count").textContent = women.length;
}

document
  .getElementById("form-section")
  .getElementsByTagName("form")[0]
  .addEventListener("submit", handleFormSubmit);

document
  .getElementsByClassName("boxes-container")[0]
  .addEventListener("click", handleBoxClick);

function startTimer() {
  const intervalId = setInterval(() => {
    const timerCountElement = document.getElementById("timer-count");
    const timerCount = parseInt(timerCountElement.textContent);
    timerCountElement.textContent = timerCount - 1;
    if (timerCount === 1) {
      clearInterval(intervalId);
    }
  }, 1000);
}
