window.addEventListener('load', init);
var slideIndex = 1;
function init() {
  document.getElementById('faulknerB').addEventListener("mouseover", function() {showFaulkner(true);});
  document.getElementById('greaterWPIB').addEventListener("mouseover", function() {showExplore(true);});
  document.getElementById('PMPB').addEventListener("mouseover", function() {showPMP(true);});
  document.getElementById('TPLB').addEventListener("mouseover", function() {showTPL(true);});

  document.getElementById('faulknerB').addEventListener("mouseout", function() {showFaulkner(false);});
  document.getElementById('greaterWPIB').addEventListener("mouseout", function() {showExplore(false);});
  document.getElementById('PMPB').addEventListener("mouseout", function() {showPMP(false);});
  document.getElementById('TPLB').addEventListener("mouseout", function() {showTPL(false);});

  document.getElementById('faulknerB').addEventListener("click", function() {redirectToGitHub('https://github.com/SoftEngTeamC/FaulknerMap2');});
  document.getElementById('greaterWPIB').addEventListener("click", function() {redirectToGitHub('https://github.com/ginagr/Urban_Adventure');});
  document.getElementById('TPLB').addEventListener("click", function() {redirectToGitHub('https://github.com/ginagr/ThePerfectLineup3.0');});

  document.getElementById('emailI').addEventListener("mousedown", addEmail);
  document.getElementById('githubI').addEventListener("mousedown", addGitHub);
  document.getElementById('phone_numI').addEventListener("mousedown", addNum);

  loadImages();
  // showDivs(slideIndex);
}

function addNum() {
  document.getElementById('phone_num').innerText = '(510)684-9658';
}
function addEmail() {
  document.getElementById('email').innerText = 'ggonzalezroundey@wpi.edu';
}
function addGitHub() {
  document.getElementById('github').innerText = 'github.com/ginagr';
}

function switchNav(idName) {

  document.getElementById('intro').style.display = 'none';
  document.getElementById('experience').style.display = 'none';
  document.getElementById('projects').style.display = 'none';
  document.getElementById('courses').style.display = 'none';
  document.getElementById('levels').style.display = 'none';
  document.getElementById('extracurriculars').style.display = 'none';
  document.getElementById('info').style.display = 'none';

  idName.style.display = 'block';
}

function showFaulkner(show){
 var faulkner = document.getElementById('faulkner');
 if(show){
   faulkner.innerHTML = "<li>As the lead software engineer for a team of 10, guided the team in the creation of a pathfinding and administrative kiosk application. Features include pathfinding from multiple locations to different floors of the Faulkner Hospital, the ability for an admin to sign in and add/edit/delete locations, services or doctors, and supports seven languages for user pathfinding text.</li><li>Utilized agile software development for four iterations in seven weeks. </li>";
 } else {
   faulkner.innerHTML = "";
 }
}

function showExplore(show){
  var greaterWPI = document.getElementById('greaterWPI');
  if(show){
    greaterWPI.innerHTML = "<li>Created a location based Android application to incentivize exploring the WPI campus and Worcester.</li><li>Functions include a map and a respective list with the user’s current location as well as markers on different locations throughout Worcester that the user needs to visit.</li>";
  } else {
    greaterWPI.innerHTML = "";
  }
}

function showPMP(show){
  var pmp = document.getElementById('PMP');
  if(show){
    pmp.innerHTML = "<li>Philippi Music Project (PMP) aims to provide an infrastructure to township artists by building a studio and offering studio rental time as well as mixing and mastering services. </li><li>Assisted PMP by reevaluating its business plan and exploring music distribution models, including a mobile application, to serve as a potential revenue generation method as a member of a 3-person team. </li>";
  } else {
   pmp.innerHTML = "";
 }
}

function showTPL(show){
  var tpl = document.getElementById('TPL');
  if(show){
    tpl.innerHTML = "<li>Created an Android application for designing a virtual lineup and roster updates for the sport of rowing.</li><li>Current main functions include importing/editing/deleting athletes and their statistics, creating/editing boats, and selecting rowers for individual spots in specific boats.</li>";
  } else {
    tpl.innerHTML = "";
  }
}

function redirectToGitHub(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function loadImages() {
  html = '';
  for (i = 2; i < 74; i++) {
    html = html + '<div class="carousel-item"><img class="d-block img-fluid" src="pottery/pot' + i + '.jpg"></div>'
    // html = html + '<img class="mySlides" src="pottery/pot' + i + '.jpg" style="width:75%; height=auto; background-size: cover;">';
  }
  document.getElementById('slides').innerHTML = html;
}

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  } 
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}






