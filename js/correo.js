document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact_form');
  const mensaje = document.getElementById('form-mensaje');

  // Inicializa EmailJS (pon tu USER_ID)
  emailjs.init('cUNsWZ0WbPtwMLVtR');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    emailjs.sendForm('service_mrp81tm', 'template_bj7p9qk', this)
      .then(() => {
        mensaje.style.display = 'block';
        mensaje.textContent = '¡Mensaje enviado correctamente!';
        form.reset();

        setTimeout(() => {
          mensaje.style.display = 'none';
        }, 5000);
      })
      .catch(() => {
        mensaje.style.display = 'block';
        mensaje.textContent = 'Error al enviar el mensaje.';
      });
  });
});
