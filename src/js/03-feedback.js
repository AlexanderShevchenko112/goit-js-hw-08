import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const formEl = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input');
const messageEl = document.querySelector('textarea');

populateForm();

formEl.addEventListener(`submit`, onFormSubmit);
formEl.addEventListener(`input`, throttle(onFormInput, 500));

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    messageEl.value = savedData.message || ``;
    emailEl.value = savedData.email || ``;
  }
}
