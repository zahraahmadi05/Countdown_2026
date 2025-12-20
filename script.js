const newYear = new Date("January 1, 2026, 00:00:00").getTime();

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = newYear - now;

  if (distance < 0) {
    clearInterval(countdown);
    document.getElementById("countdown");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).innerHTML = `${days} Day ${hours} Hour ${minutes} Minute ${seconds} Second`;
}, 1000);
