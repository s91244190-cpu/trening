document.querySelectorAll('filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all'  card.classList.contains(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';

        }
    });
  });
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Сообщение отправлено!');
    this.reset();
});


