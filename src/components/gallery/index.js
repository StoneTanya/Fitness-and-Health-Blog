export function SertSlider() {
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    const slide = document.querySelectorAll(".mySlides");
    let i = 0;
    next.addEventListener("click", () => {
        slide[i].style.display = 'none';
        i++;
        if (i >= slide.length) {
            i = 0;
        }
        slide[i].style.display = 'block';
    });

    prev.addEventListener('click', () => {
        slide[i].style.display = 'none';
        i = i - 1;
        if (i < 0) {
            i = slide.length - 1;
        }
        slide[i].style.display = 'block';
    });
};

