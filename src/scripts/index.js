document.addEventListener('DOMContentLoaded', function () {
    let dropdownParents = document.querySelectorAll('.dropdown-parent');

    dropdownParents.forEach(function(parent) {
        let dropdownMenu = parent.querySelector('.dropdown-menu');
        let hideTimeout;

        parent.addEventListener('mouseenter', function() {
            if (hideTimeout) clearTimeout(hideTimeout);
            if(dropdownMenu) {
                dropdownMenu.classList.add('active');
            }
        });

        parent.addEventListener('mouseleave', function() {
            hideTimeout = setTimeout(function() {
                if(dropdownMenu) {
                    dropdownMenu.classList.remove('active');
                }
            }, 100);
        });

        dropdownMenu.addEventListener('mouseenter', function() {
            if (hideTimeout) clearTimeout(hideTimeout);
                dropdownMenu.classList.add('active');
            });
            dropdownMenu.addEventListener('mouseleave', function() {
                hideTimeout = setTimeout(function() {
                dropdownMenu.classList.remove('active');
            }, 100);
        });
    });
});
