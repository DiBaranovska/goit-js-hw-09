import Notiflix from 'notiflix';
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  for (let position = 0; position < Number(form.amount.value); position += 1) {
    delay = Number(form.delay.value) + Number(form.step.value) * position;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position + 1} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position + 1} in ${delay}ms`
        );
      });
  }
});

function createPromise(position, delay) {
  return (promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  }));
}
