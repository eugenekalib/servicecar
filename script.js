let slideIndex = 1;
let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.previous');
let slides = document.querySelectorAll('.item');
let photos = document.querySelectorAll('.imgslider');





showSlides(slideIndex);



prevButton.onclick = function() {
    console.log('Кнопка назад нажата!');
    showSlides(slideIndex -= 1);
    console.log(slideIndex);
}

nextButton.onclick = function() {
    console.log('Кнопка вперед нажата!');
    showSlides(slideIndex += 1);
    console.log(slideIndex);
}



function showSlides(n) {

        if (n > photos.length) {
            slideIndex = 1;
        } else if (n < 1) {
            slideIndex = photos.length
        }

        for (let photo of photos) {
            photo.style.display = "none";
        }

    photos[slideIndex - 1].style.display = "block";
    console.log(slideIndex);
}


let checkbox = document.querySelector('.checkboxshowpass');
let inputPass = document.querySelector('.inputpass');


checkbox.onchange = function() {
    if (checkbox.checked) {
        inputpass.type = 'text';
    } else {
        inputPass.type = 'password';
    }

};
