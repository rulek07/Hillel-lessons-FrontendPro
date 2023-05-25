const slides = document.querySelectorAll('#slides .slide'); 
let currentSlide = 0;

next.addEventListener('click', function() {
    slides[currentSlide].classList.remove('showing');

    if (currentSlide === (slides.length - 2)) {
        this.classList.remove('active')
    } else {
        this.classList.add('active')
    }

    slides.length !== 0 && previous.classList.add('active')
    
    slides[++currentSlide].classList.add('showing');
});

previous.addEventListener('click', function() {
    slides[currentSlide].classList.remove('showing');

    if (currentSlide === 1) {
        this.classList.remove('active')
    } else {
        this.classList.add('active')
    }
    
    slides.length !== slides.length - 1 && next.classList.add('active')

    slides[--currentSlide].classList.add('showing');
});