const form = document.querySelector("form");

const keyLS = "feedback-form-state";
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const formData = {
  email: "",
  message: "",
};

const inputsOnPageLoad = () => {
  try {
    const valueLS = JSON.parse(localStorage.getItem(keyLS));
    if (valueLS) {
      emailInput.value = valueLS.email;
      messageInput.value = valueLS.message;
    }
  } catch (err) {
    console.error(err.message);
  }
};
inputsOnPageLoad();

form.addEventListener("input", onInputsUpdate);
form.addEventListener("submit", onSubmit);

function onInputsUpdate() {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem(keyLS, JSON.stringify(formData));
}

function onSubmit(evt) {
  evt.preventDefault();
  if (emailInput.value === "" || messageInput.value === "") {
    alert("Fill please all fields");
    return;
  }
  console.log(formData);
  localStorage.removeItem(keyLS);
  formData.email = "";
  formData.message = "";
  evt.target.reset();
}
