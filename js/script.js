/*- - - - - - - - - -ANDROID PROJECTS JAVASCRIPT CODE- - - - - - - - - -*/

/*Android Projects section from HTML*/
let androidProjects = document.getElementById('android-projects-section');

/*Modal HTML to include in fragment*/
let modalHTML = '<div class="modal-content"><span class="close">&times;</span><h1 class="modal-project-title">Some title</h1><p class="modal-project-description">Some descrition ed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Lev</p></div>';

/*Set up an object to hold descriptions for the Android Projects*/
let androidProjectItems = {
  projMusicStructure: {
    title: "Musical Structure App ",
    description: "This is an example description about the 4-story modal analysis android project that I did."
  },
  proj4SMA: {
    title: "4-Story Modal Analysis",
    description: "This Android application was developed for a former professor at my undergraduate institution. One of my structural engineering professor wanted an application where he could use to teach concepts in earthquake engineering, modal analysis, and building movement behavior.\n\nThis was my very first Android app and I had to use two libraries (GraphView and JAMA) to display a graph that would depict building movement in different modes and use a JAMA library to perform the matrix algebra required to obtain Eigensolutions representing the buildings' mode, frequencies, periods, mass participation factor, response time, and more.\n\nThe application itself allows students to enter in mass and stiffness values for column supports for a typical 4-story building the the program will calculate a variety of eqarthquake engineering parameters based on these values. The student can also flip through the modes of the building seeing how the floors would behave in different modes."
  },
  projQuizroid: {
    title: "Quizroid Android App",
    description: "This application was created for my Android Basics Nanodegree program. We were assigned a task to create a short quiz on any topic and had to include proper layout formats and guidelines, a variety of questions utilizing TextViews, Buttons, Checboxes, RadioButtons, ScrollViews and more.\n\nI decided to implement a feature of ScrollView that would scroll to the next or previous question on the button click using an ObjectAnimator. \n\nI also wanted to create a simple, clean, and modern user interface. The rounded buttons complimented the the rounded backgrounds of the questions and the white on light blue provided a claming contrast to make the app feel more immersive."
  },
  projApples2Lemons: {
    title: "Something about something living in Japan",
    description: "Something more about living in something"
  },
  projMiwok: {
    title: "Miwok Language App",
    description: ""
  },
  projLinear: {
    title: "Linear Interpolator App",
    description: "Of the many handful of linear interpolation applications on Google Play, none had a clean and simple UI. I wanted to create an application that was very easy to use and one that had a consistent and clean user interface.\n\nI decided to go with a purple and black theme to provide sharp contrast that gave the app a sense of a really technical calculator.\n\nWith input validation, clean fonts and colors, and a results display, and a window that boldy displays the interpolated value, this app provides for a clean and easy-to-use application."
  },
  projBusinessCard: {
    title: "Business Card App",
    description: "This was another project done for my Android Basics Nanodegree program. We were tasked with creating a single-screen application that displayed information about a fictional business. Contact information had to include the business name, phone number, address, and description about the business.\n\nA ScrollView was used to display all the required information for this project. Additional components including multiple TextViews and a couple ImageViews."
  },
  projQuidditch: {
    title: "Quidditch Score Keeper",
    description: "This was an application we were tasked with creating in our Android Basics Nanodegree program. We had to use Java to write a program that would keep track of team scores for any sport (of course, I had to choose Quidditch!).\n\nButtons, ImageViews, textViews, and RealtiveLayouts were at the core of the layout. Functions were used to handl onCLick events and update variables for each teams' score."
  },
  projCourtCounter: {
    title: "Court Counter App",
    description: ""
  }
};

/*Create an element that will hold the modal content*/
let modal = document.createElement('DIV');

/*Get the document body to attach the modal to*/
let documentBody = document.getElementsByTagName('body')[0];

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
