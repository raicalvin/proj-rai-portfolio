/*- - - - - - - - - -ANDROID PROJECTS JAVASCRIPT CODE- - - - - - - - - -*/

/*Android Projects section from HTML*/
let androidProjects = document.getElementById('android-projects-section');

/*Modal HTML to include in fragment*/
let modalHTML = '<div class="modal-content"><span class="close">&times;</span><h1 class="modal-project-title">Some title</h1><p class="modal-project-description">Some descrition ed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Lev</p></div>';

/*Set up an object to hold descriptions for the Android Projects*/
let androidProjectItems = {
  proj4SMA: {
    title: "4-Story Modal Analysis",
    description: "This is an example description about the 4-story modal analysis android project that I did."
  },
  projQuizroid: {
    title: "Quizroid Android App",
    description: "This is some other app that I used to do something."
  },
  projApples2Lemons: {
    title: "Something about something living in Japan",
    description: "Something more about living in something"
  }
};

/*Create an element that will hold the modal content*/
let modal = document.createElement('DIV');

/*Add event listener to create and open modal*/
androidProjects.addEventListener('click', function(e) {
  let target = e.target;
  console.log(target);
  if (target.tagName === 'SPAN' && target.innerText === 'About') {
    let frag = document.createDocumentFragment();
    modal.setAttribute('id', 'myModal');
    modal.setAttribute('class', 'modal');
    modal.innerHTML = modalHTML;
    modal.setAttribute('style', 'display: block; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);');

    /*Get the project title key from the About span of the click target*/
    let projTitleKey = target.className;
    /*Set the title modal title*/
    modal.getElementsByClassName('modal-project-title')[0].innerText = androidProjectItems[projTitleKey].title;
    /*Set the modal description*/
    modal.getElementsByClassName('modal-project-description')[0].innerText = androidProjectItems[projTitleKey].description;

    frag.appendChild(modal);
    documentBody.appendChild(frag);
  }
});

/*Event listener to close modal*/
modal.addEventListener('click', function(e) {
  let target = e.target;
  if (target.className === 'modal' || target.className == 'close') {
    modal.setAttribute('style', 'display: none;');
  }
});

/*- - - - - - - - - -CONNECT SECTION JAVASCRIPT CODE- - - - - - - - - -*/

/*Get the section with the connect items*/
let connectSection = document.getElementById('connect-section');

connectSection.addEventListener('click', function(e) {
  let target = e.target;
  if (target.classList.contains('contact-item-github') || target.parentElement.classList.contains('contact-item-github')) {
    window.open('https://github.com/raicalvin');
  }
  if (target.classList.contains('contact-item-linkedin') || target.parentElement.classList.contains('contact-item-linkedin')) {
    window.open('https://www.linkedin.com/in/csrai/');
  }

});
