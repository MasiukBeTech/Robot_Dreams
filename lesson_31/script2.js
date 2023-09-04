
function getTimeUntilNewYear() {
  const now = new Date();
  const newYear = new Date(now.getFullYear() + 1, 0, 1);
  const timeRemaining = newYear - now;

  const seconds = Math.floor(timeRemaining / 1000) % 60;
  const minutes = Math.floor(timeRemaining / 1000 / 60) % 60;
  const hours = Math.floor(timeRemaining / 1000 / 60 / 60) % 24;
  const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

  return {
    days,
    hours,
    minutes,
    seconds
  };
}

function updateCountdown() {
  const countdown = getTimeUntilNewYear();

  const h3 = document.getElementsByTagName('h3')[0];
  h3.innerHTML = `${countdown.days} days ${countdown.hours} hours ${countdown.minutes} minutes ${countdown.seconds} seconds`;

  setInterval(() => {
    const countdown = getTimeUntilNewYear();
    h3.innerHTML = `${countdown.days} days ${countdown.hours} hours ${countdown.minutes} minutes ${countdown.seconds} seconds`;
  }, 1000);
}

updateCountdown();

