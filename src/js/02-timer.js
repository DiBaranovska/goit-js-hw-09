import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const btnStart = document.querySelector('[data-start]');
const inputDate = document.querySelector('#datetime-picker');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minEl = document.querySelector('[data-minutes]');
const secEl = document.querySelector('[data-seconds]');
btnStart.disabled = true;
let timerId = null;
let currentTime = new Date();
let finishDate = new Date(inputDate.value);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const todayDate = new Date();
    const chooseDate = new Date(selectedDates[0]);
    if (chooseDate.getTime() <= todayDate.getTime()) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
    }
  },
};

flatpickr('#datetime-picker', options);

const stopTimer = () => {
  if ((finishDate = currentTime)) {
    clearInterval(timerId);
  }
};

const startTimer = () => {
  btnStart.disabled = true;
  timerId = setInterval(() => {
    currentTime = new Date();
    finishDate = new Date(inputDate.value);
    if (finishDate > currentTime) {
      const { days, hours, minutes, seconds } = convertMs(
        finishDate.getTime() - currentTime.getTime()
      );
      daysEl.textContent = days;
      hoursEl.textContent = hours;
      minEl.textContent = minutes;
      secEl.textContent = seconds;
    } else {
      clearInterval(timerId);
    }
  }, 1000);
};

btnStart.addEventListener('click', startTimer);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
