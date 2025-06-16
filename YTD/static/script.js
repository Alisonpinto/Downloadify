document.getElementById('feedback-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const comments = document.getElementById('comments').value.trim();

  const params = {
    from_name: name,
    from_email: email,
    subject: subject,
    comments: comments,
    to_name: 'Admin'
  };

  if (name && email && subject && comments) {
    emailjs.send('service_4trqdcr', 'template_m5m9nqh', params)
      .then(() => {
        alert('✅ Thank you! Your message was sent.');
        document.getElementById('feedback-form').reset();
      }, (error) => {
        alert('❌ Something went wrong while sending.');
        console.error('EmailJS error:', error);
      });
  } else {
    alert('⚠ Please fill in all fields.');
  }
});