let androidProjects = document.getElementById('android-projects-section');

let modalHTML = '<div class="modal-content"><span class="close">&times;</span><h1 class="modal-project-title">Some title</h1><p class="modal-project-description">Some descrition ed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Lev</p></div>';

let arrayTitle = ['descriptn 1', 'description 2', 'description 3'];
let projectDescriptions = ['Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived.']

let documentBody = document.getElementsByTagName('body')[0];
console.log(documentBody);

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
    /*Set the project title and project description here*/
    

    frag.appendChild(modal);
    console.log(frag);
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
