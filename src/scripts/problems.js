document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.copy-btn-container').forEach(btn => {
        btn.addEventListener('click', function() {
            const command = this.parentElement.querySelector('.command-text').textContent;
            navigator.clipboard.writeText(command.trim()).then(() => {
                const icon = this.querySelector('i');
                icon.classList.remove('fa-copy');
                icon.classList.add('fa-check');
                icon.classList.add('fa-solid');

                setTimeout(() => {
                    icon.classList.remove('fa-check');
                    icon.classList.add('fa-copy');
                }, 2000);
            });
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
