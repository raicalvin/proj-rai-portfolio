/*- - - - - - - - - -ANDROID PROJECTS JAVASCRIPT CODE- - - - - - - - - -*/

/*Android Projects section from HTML*/
let androidProjects = document.getElementById("android-projects-section");

/*Modal HTML to include in fragment*/
let modalHTML =
  '<div class="modal-content"><span class="close">&times;</span><h1 class="modal-project-title">Some title</h1><p class="modal-project-description">Some descrition ed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Lev</p></div>';

/*Set up an object to hold descriptions for the Android Projects*/
let androidProjectItems = {
  projReelTimeApp: {
    title: "ReelTime Android Application",
    description:
      "This was our apprentice final project where we worked with a web team and a set of designers to build a social networking movie planning app. Users could search for movies playing in their favorite theaters, create movie viewing events with their friends, and accept and decline movie events for showings they wanted to attend or not. All the data was retrieved from a custom backend built by the web team.\n\nThe Android tech stack included Kotlin, RxJava, OkHTTP, Retrofit, and Butterknife."
  },
  projMusicStructure: {
    title: "Musical Structure App ",
    description:
      "This application was a project submittal for my Android Basics Nanodegree. We were tasked with creating a music player application that implemented multiple activities, ListViews with adapters, and intents and proper navigation between activities. The app had to contain various layouts for a user to be able to understand the structure of the application and be able to move around it easily.\n\nThe app itself does not play music, as the AudioManager and media focus concepts were incorporated later into the Miwok Language app."
  },
  proj4SMA: {
    title: "4-Story Modal Analysis",
    description:
      "This Android application was developed for a former professor at my undergraduate institution. One of my structural engineering professor wanted an application where he could use to teach concepts in earthquake engineering, modal analysis, and building movement behavior.\n\nThis was my very first Android app and I had to use two libraries (GraphView and JAMA) to display a graph that would depict building movement in different modes and use a JAMA library to perform the matrix algebra required to obtain Eigensolutions representing the buildings' mode, frequencies, periods, mass participation factor, response time, and more.\n\nThe application itself allows students to enter in mass and stiffness values for column supports for a typical 4-story building the program will calculate a variety of earthquake engineering parameters based on these values. The student can also flip through the modes of the building seeing how the floors would behave in different modes."
  },
  projQuizroid: {
    title: "Quizroid Android App",
    description:
      "This application was created for my Android Basics Nanodegree program. We were assigned a task to create a short quiz on any topic and had to include proper layout formats and guidelines, a variety of questions utilizing TextViews, Buttons, Checkboxes, RadioButtons, ScrollViews and more.\n\nI decided to implement a feature of ScrollView that would scroll to the next or previous question on the button click using an ObjectAnimator. \n\nI also wanted to create a simple, clean, and modern user interface. The rounded buttons complimented the rounded backgrounds of the questions and the white on light-blue provided a calming contrast to make the app feel more immersive."
  },
  projApples2Lemons: {
    title: "Something about something living in Japan",
    description: "Something more about living in something"
  },
  projMiwok: {
    title: "Miwok Language App",
    description:
      "This project was built in my Android Basics Nanodegree, part of the Grow With Google Developer Scholarship program. We built a Miwok language app that stored common words and phrases of the Miwok language. We used custom adapters to manage the various words, phrases, and translations, developed custom views for each list item, implemented fragments in a TabLayout with a ViewPager to allow the user to scroll between categories, and managed audio focus and audio playback using the AudioManager class.\n\nWhen the user clicks on any item, the pronunciation of the Miwok word or phrase will play. The audio itself is managed with the AudioManager class and works with the system audio to manage focus and playback, stopping when the user exits the app or pausing when there is an incoming phone call, notification, or other sound source."
  },
  projLinear: {
    title: "Linear Interpolator App",
    description:
      "Of the many handful of linear interpolation applications on Google Play, none had a clean and simple UI. I wanted to create an application that was very easy to use and one that had a consistent and clean user interface.\n\nI decided to go with a purple and black theme to provide sharp contrast that gave the app a sense of a really technical calculator.\n\nWith input validation, clean fonts and colors, and a results display, and a window that boldly displays the interpolated value, this app provides for a clean and easy-to-use application."
  },
  projBusinessCard: {
    title: "Business Card App",
    description:
      "This was another project done for my Android Basics Nanodegree program. We were tasked with creating a single-screen application that displayed information about a fictional business. Contact information had to include the business name, phone number, address, and description about the business.\n\nA ScrollView was used to display all the required information for this project. Additional components including multiple TextViews and a couple ImageViews."
  },
  projQuidditch: {
    title: "Quidditch Score Keeper",
    description:
      "This was an application we were tasked with creating in our Android Basics Nanodegree program. We had to use Java to write a program that would keep track of team scores for any sport (of course, I had to choose Quidditch!).\n\nButtons, ImageViews, textViews, and RealtiveLayouts were at the core of the layout. Functions were used to handle onClick events and update variables for each teams' score."
  },
  projCourtCounter: {
    title: "Court Counter App",
    description:
      "Similar to the Quidditch Score Keeper app, this app tracks the number of points two basketball teams have scored. he main concepts incorporated into this app were Java methods, system themes, and managing color and theme resources and references."
  },
  projTourGuide: {
    title: "Tour Guide App",
    description:
      "This was an app project for my Android Basics Nanodegree from Udacity. I have always had a deep fascination with Japan so naturally I decided to create this app based on cities in Japan that I had visited during my first trip there in 2018. The project submission only called for one city, but I designed the app for four other cities in case the app continues further development.\n\nWe were instructed to create a tour guide app for a city and implement some type of Android navigation (through a navigation drawer or with a ViewPager) to house different categories that tourists coming to the city might find useful.\n\nThe main concepts used in this apps development were implementing fragments with ViewPager, using explicit intents to launch tour information for the cities as well as the individual history, places, food, and secrets items, and using custom adapters and ListViews to organize and display the data on the screen.\n\nGravitDesigner was used heavily for the mockups, wireframes, and image effects including the city entries on the first page, the Shinto shrine for the History item backgrounds, and the various picture resources and densities."
  },
  projNewsApp: {
    title: "Guardian News App",
    description:
      "This app was my final project for the networking course in my Android Basics Nanodegree program. The app itself had to pull the latest news stories from Guardian using the Guardian API and display them to the user in a List View. The user is able to select how many stories appear on their app using a preference setting and each story list item includes a link to the actual story on the Guardian website. The concepts of background threads, HTTP networking, asynchronous handling, JSON parsing, and control flow were utilized in the development of this app."
  },
  projInventoryApp: {
    title: "iPhone Inventory App",
    description:
      "This app was the final project for my data storage course as well as a comprehensive final project for my Android Basics Nanodegree. This app utilized SQLite3 to store data for a fictional retailer that sells iPhones. The users are able to view, edit, and update the iPhones they are selling with a handful of properties such as the quantity, the price, the supplier, and more. The app takes advantage of custom CursorAdapters and CursorLoaders to communicate between the UI and the database as well as be able to load information from the database asynchronously while the user is able to maneuver around the app. Clicking on an individual iPhone allows the user to see current information about that particular item from the database and be able to edit or delete it. Users are also able to add new products to the database through a seperate form. The project encompassed the core concepts of Android and Java learned throughout each of the courses within the Nanodegree."
  }
};

/*Create an element that will hold the modal content*/
let modal = document.createElement("DIV");

/*Get the document body to attach the modal to*/
let documentBody = document.getElementsByTagName("body")[0];

/*Add event listener to create and open modal*/
androidProjects.addEventListener("click", function(e) {
  let target = e.target;
  console.log(target);
  if (target.tagName === "SPAN" && target.innerText === "About") {
    let frag = document.createDocumentFragment();
    modal.setAttribute("id", "myModal");
    modal.setAttribute("class", "modal");
    modal.innerHTML = modalHTML;
    modal.setAttribute(
      "style",
      "display: block; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);"
    );

    /*Get the project title key from the About span of the click target*/
    let projTitleKey = target.className;
    /*Set the title modal title*/
    modal.getElementsByClassName("modal-project-title")[0].innerText =
      androidProjectItems[projTitleKey].title;
    /*Set the modal description*/
    modal.getElementsByClassName("modal-project-description")[0].innerText =
      androidProjectItems[projTitleKey].description;

    frag.appendChild(modal);
    documentBody.appendChild(frag);
  }
});

/*Event listener to close modal*/
modal.addEventListener("click", function(e) {
  let target = e.target;
  if (target.className === "modal" || target.className == "close") {
    modal.setAttribute("style", "display: none;");
  }
});

/*- - - - - - - - - -RESUME SECTION JAVASCRIPT CODE- - - - - - - - - -*/

/*- - - - - - - - - -CONNECT SECTION JAVASCRIPT CODE- - - - - - - - - -*/

/*Get the section with the connect items*/
let connectSection = document.getElementById("connect-section");

connectSection.addEventListener("click", function(e) {
  let target = e.target;
  if (
    target.classList.contains("contact-item-github") ||
    target.parentElement.classList.contains("contact-item-github")
  ) {
    window.open("https://github.com/raicalvin");
  }
  if (
    target.classList.contains("contact-item-linkedin") ||
    target.parentElement.classList.contains("contact-item-linkedin")
  ) {
    window.open("https://www.linkedin.com/in/csrai/");
  }
});
