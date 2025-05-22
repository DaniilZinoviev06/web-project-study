document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    function handleBoxClick() {
        if (this.classList.contains('clicked')) {
            this.classList.remove('clicked');
            return;
        }

        boxes.forEach(box => box.classList.remove('clicked'));

        this.classList.add('clicked');
    }

    function handleClickOutside(e) {
        if (!e.target.closest('.box')) {
            boxes.forEach(box => box.classList.remove('clicked'));
        }
    }

    boxes.forEach(box => {
        box.addEventListener('click', handleBoxClick);
    });

    document.addEventListener('click', handleClickOutside);
});
