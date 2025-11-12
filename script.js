// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const response = document.getElementById("responseMessage");
  response.innerText = `Thanks, ${name}! We will contact you soon.`;
  this.reset();
});

// QUOTE FORM
document.getElementById("quoteForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("qname").value;
  const response = document.getElementById("quoteResponse");
  response.innerText = `Thank you, ${name}! Your request has been received.`;
  this.reset();
});

// FAQ TOGGLE
const faqs = document.querySelectorAll(".faq-item h4");
faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.nextElementSibling.classList.toggle("active");
  });
});
