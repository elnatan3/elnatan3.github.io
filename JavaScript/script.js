const categoryTitle = document.querySelectorAll('.programmingLanguage');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

function filterPosts(item){
    changeActivePosition(item);
    for(let i = 0; i < allCategoryPosts.length; i++){
        if(allCategoryPosts[i].classList.contains(item.attributes.id.value)){
            allCategoryPosts[i].style.display = "block";
        } else {
            allCategoryPosts[i].style.display = "none";
        }
    }
}

function changeActivePosition(activeItem){
    for(let i = 0; i < categoryTitle.length; i++){
        categoryTitle[i].classList.remove('active');
    }
    activeItem.classList.add('active');
};

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.slides img');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('active', 'prev', 'next');
    }
    slides[slideIndex - 1].classList.add('active');
    if (slideIndex > 1) {
      slides[slideIndex - 2].classList.add('prev');
    } else {
      slides[slides.length - 1].classList.add('prev');
    }
    if (slideIndex < slides.length) {
      slides[slideIndex].classList.add('next');
    } else {
      slides[0].classList.add('next');
    }
  }

  function toggleDescription(descriptionId) {
    var description = document.getElementById(descriptionId);
    var button = document.getElementById(descriptionId + "-button");
    if (description.style.display === "none") {
        description.style.display = "inline";
        button.innerHTML = "Hide";
    } else {
        description.style.display = "none";
        button.innerHTML = "Read";
    }
}

const track = document.getElementById("each-image");

let mouseDown = false;
let mouseDownAt = 0;
let prevPercentage = 0;

const handleOnDown = e => {
  mouseDown = true;
  mouseDownAt = getClientX(e);
  prevPercentage = parseFloat(track.dataset.percentage) || 0;
};

const handleOnUp = () => {
  mouseDown = false;
};

const handleOnMove = e => {
  if (!mouseDown) return;

  const mouseDelta = mouseDownAt - getClientX(e);
  const maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100;
  const nextPercentageUnconstrained = prevPercentage + percentage;
  const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  track.style.transform = `translate(${nextPercentage}%, -50%)`;
};

const getClientX = e => {
  if (e.touches && e.touches.length > 0) {
    return e.touches[0].clientX;
  }
  return e.clientX;
};

track.addEventListener("mousedown", handleOnDown);
track.addEventListener("touchstart", handleOnDown);
window.addEventListener("mouseup", handleOnUp);
window.addEventListener("touchend", handleOnUp);
window.addEventListener("mousemove", handleOnMove);
window.addEventListener("touchmove", handleOnMove);




  
  
  