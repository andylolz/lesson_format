var ul = document.getElementsByTagName("ul")
for (var x = 0; x < ul.length; x++) {
  if (ul[x].className == 'breadcrumbs-list') continue;
  ul[x].addEventListener('click', function(e) {
    if(e.target && e.target.nodeName == "LI") {
      e.target.classList.toggle('activity-done');
    }
  }, false);
}

function createControls() {
  var controls = document.createElement("div");
  controls.className = 'files-item materials';

  ['Back', 'Next'].forEach(function (controlName) {
    var control = document.createElement("a");
    control.className = 'files-link materials';
    control.style.display = 'none';
    control.id = 'step' + controlName;
    control.appendChild(document.createTextNode(controlName));
    controls.appendChild(control);
  });

  return controls;
}

function paginate() {
  // scroll up!
  window.scroll(0, 0);

  // figure out current step
  // TODO: Sort this out!
  var currentStep = window.location.hash.substr(6);
  currentStep = (currentStep == 'intro') ? 0 : parseInt(currentStep);

  // hide all but the current step
  var steps = document.getElementsByClassName('level1');
  for (var x = 0; x < steps.length; x++) {
    if (x == currentStep) {
      steps[x].style.display = 'block';
    } else {
      steps[x].style.display = 'none';
    }
  }

  var back = document.getElementById('stepBack');
  if (currentStep == 0) {
    back.style.display = 'none';
  } else {
    back.style.display = 'inline-block';
    back.href = '#step-' + (currentStep - 1);
  }

  var next = document.getElementById('stepNext');
  if (currentStep == steps.length-1) {
    next.style.display = 'none';
  } else {
    next.style.display = 'inline-block';
    next.href = '#step-' + (currentStep + 1);
  }
}

if (window.location.hash.indexOf('#step-') === 0) {
  // let's paginate!

  // hide boring stuff
  document.getElementsByClassName('breadcrumbs')[0].style.display = 'none';
  var notes = document.getElementsByClassName('note');
  for (var x = 0; x < notes.length; x++) {
    notes[x].style.display = 'none';
  }

  // add some basic controls
  document.getElementsByTagName('main')[0].appendChild(createControls());

  // listen for hash changes
  window.onhashchange = paginate;

  paginate();
}
