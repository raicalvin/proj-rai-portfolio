let androidProjects = document.getElementById('android-projects-section');

let modalHTML = '<div class="modal-content"><span class="close">&times;</span><p>Some text in the Modal..</p></div>';

let arrayTitle = ['descriptn 1', 'description 2', 'description 3']

let documentBody = document.getElementsByTagName('body')[0];
console.log(documentBody);

androidProjects.addEventListener('click', function(e) {
  let target = e.target;
  console.log(target);
  if (target.tagName === 'SPAN' && target.innerText === 'About') {
    let frag = document.createDocumentFragment();
    let modal = document.createElement('DIV')
    modal.setAttribute('id', 'myModal');
    modal.setAttribute('class', 'modal');
    modal.innerHTML = modalHTML;
    modal.setAttribute('style', 'display: block; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);');
    frag.appendChild(modal);
    console.log(frag);
    documentBody.appendChild(frag);
  }

});
