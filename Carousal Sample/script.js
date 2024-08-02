document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    let currentItem = 0;

    const showItem = (index) => {
        items[currentItem].classList.remove('active');
        currentItem = index;
        if (currentItem >= items.length) {
            currentItem = 0;
        } else if (currentItem < 0) {
            currentItem = items.length - 1;
        }
        items[currentItem].classList.add('active');
    };

    document.querySelector('.carousel-button.next').addEventListener('click', () => {
        showItem(currentItem + 1);
    });

    document.querySelector('.carousel-button.prev').addEventListener('click', () => {
        showItem(currentItem - 1);
    });
});
