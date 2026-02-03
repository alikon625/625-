// ===== Модал логикасы =====
const bookingModal = document.getElementById('bookingModal');
const modalServiceName = document.getElementById('modalServiceName');
const serviceInput = document.getElementById('serviceName');

// Ашатын функция (карточка немесе Hero батырмасы)
function openBooking(serviceName) {
    bookingModal.style.display = 'block';
    modalServiceName.innerText = `Брондау қызметі: ${serviceName}`;
    serviceInput.value = serviceName;
}

// Жабатын функция
function closeBooking() {
    bookingModal.style.display = 'none';
}

// Модалды терезенің сыртынан басқанда жабу
window.onclick = function(event) {
    if(event.target == bookingModal){
        closeBooking();
    }
}

// ===== WhatsApp жіберу =====
document.getElementById('bookingForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const carModel = document.getElementById('carModel').value;
    const carYear = document.getElementById('carYear').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const service = serviceInput.value;

    const message = `Сәлеметсіз бе! Мен Royal Auto автосервисіне брон жасадым.%0AАты: ${name}%0AТелефон: ${phone}%0AҚызмет: ${service}%0AКөлік: ${carModel}%0AЖылы: ${carYear}%0AКүні: ${date}%0AУақыты: ${time}`;

    // WhatsApp ашу
    window.open(`https://wa.me/77762744221?text=${message}`, '_blank');

    // Модалды жабу
    closeBooking();

    // Форманы тазалау
    this.reset();
});
// Counter анимациясы
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    const increment = target / 200; // Жылдамдық

    if(count < target){
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        updateCount();
        observer.unobserve(counter);
      }
    });
  }, { threshold: 1.0 });

  observer.observe(counter);
});
