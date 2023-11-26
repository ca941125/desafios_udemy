let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const carousel = document.getElementById('carousel');
    const newTransformValue = -currentIndex * 100 + '%';
    carousel.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

setInterval(nextSlide, 4000);
