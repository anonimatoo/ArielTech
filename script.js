document.getElementById('formularioImobiliario').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Collect data from the form
  let formData = new FormData(this);

  // Convert FormData to a string for WhatsApp
  let message = "*Formulário de Locação - Pessoa Física*\n\n";

  formData.forEach((value, key) => {
    if (value instanceof File) {
      message += `*${key}:* ${value.name}\n`;
    } else {
      message += `*${key}:* ${value}\n`;
    }
  });

  message += "\n*Site seguro*";

  // Encode the message for WhatsApp
  let encodedMessage = encodeURIComponent(message);

  // Construct the WhatsApp URL
  let whatsappURL = "https://wa.me/5513991052512?text=" + encodedMessage;

  // Open WhatsApp in a new tab
  window.open(whatsappURL, '_blank');
});