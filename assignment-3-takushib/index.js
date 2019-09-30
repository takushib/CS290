/*
 * Add your JavaScript to this file to complete the assignment.
 */
//Part 1: Unhide create twit box when horn button is clicked

var ctb = document.getElementById('create-twit-button');
ctb.addEventListener('click', function(){
  var MB = document.getElementById('modal-backdrop');
  MB.classList.toggle('hidden');
  var ctm = document.getElementById('create-twit-modal');
  ctm.classList.toggle('hidden');
  console.log('Button clicked');
});

//Part 2 & 4: Hide create twit box when red X is clicked, Alert if any of the fields are blank

var mcb = document.getElementsByClassName('modal-cancel-button')[0];
mcb.addEventListener('click',function(){
  var twitInput = document.getElementById('twit-text-input');
  var twitAuthor = document.getElementById('twit-attribution-input');
  var MB = document.getElementById('modal-backdrop');
  MB.classList.toggle('hidden');
  var ctm = document.getElementById('create-twit-modal');
  ctm.classList.toggle('hidden');
  console.log('Modal cancelled');
  twitInput.value = '';
  twitAuthor.value = '';
});

var mcbX = document.getElementsByClassName('modal-close-button')[0];
mcbX.addEventListener('click',function(){
  var twitInput = document.getElementById('twit-text-input');
  var twitAuthor = document.getElementById('twit-attribution-input');
  var MB = document.getElementById('modal-backdrop');
  MB.classList.toggle('hidden');
  var ctm = document.getElementById('create-twit-modal');
  ctm.classList.toggle('hidden');
  console.log('Modal closed');
  twitInput.value = '';
  twitAuthor.value = '';
});

//Part 3: add twit

var createTwit = document.getElementsByClassName('modal-accept-button')[0];
createTwit.addEventListener('click',function(){
  var twitInput = document.getElementById('twit-text-input');
  var twitAuthor = document.getElementById('twit-attribution-input');
  if(twitInput.value == '' || twitAuthor.value == '')
  {
    alert("Please fill in both of the required fields.");
  }
  else{
    var T1 = document.getElementsByClassName('twit-container')[0];
    T1.insertAdjacentHTML('beforeend','<article class="twit"><div class="twit-icon"><i class="fas fa-bullhorn"></i></div><div class="twit-content"><p class="twit-text"></p><p class="twit-attribution"><a href="#"></a></p></div></article>');

    var index = document.getElementsByClassName('twit-text').length;
    var newTextInput = document.getElementsByClassName('twit-text')[index - 1];
    var twitInput = document.getElementById('twit-text-input');
    newTextInput.insertAdjacentText('afterbegin',twitInput.value);
    var newAttribution = document.getElementsByClassName('twit-attribution')[index - 1];
    var twitAttributor = document.getElementById('twit-attribution-input');
    newAttribution.insertAdjacentText('afterbegin', twitAttributor.value);

    var MB = document.getElementById('modal-backdrop');
    MB.classList.toggle('hidden');
    var ctm = document.getElementById('create-twit-modal');
    ctm.classList.toggle('hidden');
    console.log('Twit Successfully Added, Modal Closed');
    twitInput.value = '';
    twitAuthor.value = '';
  }
});

//Part 5: Searching


/*window.onload = function(){
  var elems = document.getElementsByClassName('twit');
  window.allElems = [];
  window.ind = document.getElementsByClassName('twit-text').length;
  wi
  ndow.Parent = document.getElementsByClassName('twit-container')[0];
  for(var i = 0; i < window.ind; i++){
    window.allElems.push(elems[i]);
  }

}*/
var search = document.getElementById('navbar-search-input');
search.addEventListener('input',function(){
  var index = document.getElementsByClassName('twit-text').length;
  var elems = document.getElementsByClassName('twit');
  var Parent = document.getElementsByClassName('twit-container')[0];
  var allElems = [];
  for(var i = 0; i < index; i++){
    allElems.push(elems[i]);
  }
  for(var i = 0; i < index; i++)
  {
    let tempTwit = allElems[i].textContent;
    let tempAuthor = allElems[i].textContent;
    if(tempTwit.toLowerCase().indexOf(this.value.toLowerCase()) == -1 && tempAuthor.toLowerCase().indexOf(this.value.toLowerCase()) == -1){
      Parent.removeChild(allElems[i]);
    }
    else{
      Parent.appendChild(allElems[i]);
    }
  }


});
