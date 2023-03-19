import Notiflix from 'notiflix';
const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();
  for (let position = 0; position < Number(form.amount.value); position += 1) {
    console.log(Number(form.amount.value));
    delay = Number(form.delay.value) + Number(form.step.value) * position;
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
});

function createPromise(position, delay) {
  return (promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    console.log(shouldResolve);
    setTimeout(() => {
      if (shouldResolve) {
        resolve(position, delay);
      } else {
        reject(position, delay);
      }
    }, delay);
  }));
}

/*createPromise(2, 5000)
  .then(({ position, delay }) => {
    Notiflix.Report.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Report.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });*/
