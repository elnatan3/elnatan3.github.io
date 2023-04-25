const categoryTitle = document.querySelectorAll('.programmingLanguage');
const allCategoryPosts = document.querySelectorAll('.all');

for(let i = 0; i < categoryTitle.length; i++){
    categoryTitle[i].addEventListener('click', filterPosts.bind(this, categoryTitle[i]));
}

// get the about section and the content paragraph
const aboutSection = document.querySelector('.about');
const contentParagraph = document.querySelector('.content p');

// create a button to flip the about section
const flipButton = document.createElement('button');
flipButton.innerText = 'More';
flipButton.classList.add('flip-button');

// create a container for the view buttons
const viewButtonsContainer = document.createElement('div');
viewButtonsContainer.classList.add('view-buttons-container');

// create the view buttons
const button1 = document.createElement('button');
button1.innerText = 'Click Here';
button1.classList.add('view-button');
button1.addEventListener('click', () => {
  window.open('https://docs.google.com/document/d/1JQorCr9ebRe_AEyvEph7XpPcWHOJW-yG/edit?usp=sharing&ouid=101749978904175844215&rtpof=true&sd=true');

});

const button2 = document.createElement('button');
button2.innerText = 'Click Here';
button2.classList.add('view-button');
button2.addEventListener('click', () => {
  window.open('https://docs.google.com/document/d/1ZZZeTMgp6t7DHMfmyeOu53mRajjJEMKk/edit?usp=sharing&ouid=101749978904175844215&rtpof=true&sd=true');

});

// create labels for the buttons
const label1 = document.createElement('div');
label1.classList.add('label');
label1.innerText = '✪ Why I chose to study at liberal education?';

const label2 = document.createElement('div');
label2.innerText = '✪ My Sociological Autobiography essay';
label2.classList.add('label');

// add the buttons and labels to the container
viewButtonsContainer.appendChild(label1);
viewButtonsContainer.appendChild(button1);
viewButtonsContainer.appendChild(label2);
viewButtonsContainer.appendChild(button2);

// center the buttons
viewButtonsContainer.style.display = 'grid';
viewButtonsContainer.style.justifyContent = 'center';
viewButtonsContainer.style.alignItems = 'center';
viewButtonsContainer.style.gap = '10px';
button1.style.marginLeft = '150px';
button1.style.backgroundColor = 'green';
button2.style.marginLeft = '150px';
button2.style.backgroundColor = 'green';
button2.style.marginBottom = '80px';
label1.style.fontWeight = 'bold';
label1.style.fontStyle = 'italic';
label1.style.fontSize = '20px';
label2.style.fontWeight = 'bold';
label2.style.fontStyle = 'italic';
label2.style.fontSize = '20px';

label2.style.marginTop = '50px';

// add the flip button to the about section
aboutSection.appendChild(flipButton);

// add a click event listener to the flip button
flipButton.addEventListener('click', () => {
  // flip the about section using a CSS class
  aboutSection.classList.add('flipped');

  // wait for the flip animation to complete
  setTimeout(() => {
    // hide the content paragraph
    contentParagraph.style.display = 'none';

    // add the view buttons container to the back of the about section
    aboutSection.appendChild(viewButtonsContainer);
  }, 500); // adjust the delay time to match your CSS animation duration

  // hide the flip button
  flipButton.style.display = 'none';
});

// create a button to flip back to the content paragraph
const flipBackButton = document.createElement('button');
flipBackButton.innerText = 'Back';
flipBackButton.classList.add('flip-back-button');

// add the flip back button to the view buttons container
viewButtonsContainer.appendChild(flipBackButton);

// add a click event listener to the flip back button
flipBackButton.addEventListener('click', () => {
  // flip the about section back to the front using a CSS class
  aboutSection.classList.remove('flipped');

  // wait for the flip animation to complete
  setTimeout(() => {
    // remove the view buttons container from the about section
    aboutSection.removeChild(viewButtonsContainer);

    // show the content paragraph
    contentParagraph.style.display = 'block';
  }, 500); // adjust the delay time to match your CSS animation duration

  // show the flip button
  flipButton.style.display = 'block';
});








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
  