document.querySelectorAll('.faqq h3').forEach((question) => {
  question.addEventListener('click', () => {
    question.parentElement.classList.toggle('active');
  });
});
