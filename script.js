const scriptURL = 'https://script.google.com/macros/s/AKfycbyhLptHsXpX1lHqg3lLrezOHnR4kpIOGNoJgzMTtKpbgI0C3kf0Wxd5SAtyzGE0OrcYqA/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
})
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Here you can add your form handling logic (e.g., AJAX call)

    // Show the success popup
    document.getElementById('successPopup').classList.remove('hidden');

    // Reset the form
    this.reset();
});

// Close the popup when clicking on the close button
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('successPopup').classList.add('hidden');
});

// Close the popup when clicking outside of the popup content
document.getElementById('successPopup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.classList.add('hidden');
    }
});
