// declaring variables based  
let songChoices = document.getElementById('songChoices');
let videoFrame = document.getElementById('videoFrame');
let background = document.getElementById('background');
let title = document.getElementById('title');
let desc = document.getElementById('desc');
let colorStyle = document.getElementById('colorStyle');
let theme = document.getElementById("theme");
let setDisplay = document.getElementById("setDisplay");
let hideBtn = document.getElementById("hideBtn");
let sPanel = document.getElementById("sPanel");
let nBtn = document.getElementById('nBtn');
let vBtn = document.getElementById('vBtn');
let rBtn = document.getElementById('rBtn');
let name = document.getElementById('name');
let email = document.getElementById('email');
let submitBtn = document.getElementById('submitBtn');

// initializes the state as 0
let themeState = 0;
let menuState = 0;


function themeSwitch() {
    themeState = (themeState + 1) % 3; // Cycle through 0, 1, 2
    applyTheme(themeState);
    localStorage.setItem('themeState', themeState); // Stores the theme into local storage 
}


function setView() {
    let shown = 0
    let hidden = 1
    
    // if the value of the menu state is equal to the value of shown;
    if (menuState === shown){
        setDisplay.style.display = "none";
        theme.style.display = "none";
        dropBtn.style.display = "none";
        userSet.style.display = "none";
        hideBtn.innerText = "Show";
        hideBtn.style.width = "auto";
        hideBtn.style.fontSize = "10px";
        sPanel.style.maxWidth = "max-content";
        nBtn.style.display = "none";
    vBtn.style.display = "none";
    rBtn.style.display = "none";
    name.style.display = "none";
    email.style.display = "none";
    submitBtn.style.display = "none";
    
    menuState = hidden
}

// if the value of the menu state is equal to the value of hidden;
else if (menuState === hidden){
    setDisplay.style.display = "block";
    theme.style.display = "block";
    dropBtn.style.display = "block";
    userSet.style.display = "block";
    hideBtn.innerText = "Hide";
    hideBtn.style.width = "150px";
    hideBtn.style.fontSize = "15px";
    sPanel.style.width = "150px";
    nBtn.style.display = "block";
    vBtn.style.display = "block";
    rBtn.style.display = "block";
    name.style.display = "block";
    email.style.display = "block";
    submitBtn.style.display = "block";
    
    menuState = shown
    
}

}

// stores the two values on click
function store_userSet(){
    localStorage.setItem('name', name.value)
    localStorage.setItem('email', email.value)
}

// sets the user setting buttons as hidden by default
userBtns.style.display = "none";

//shows or hides the user setting buttons on click
function shwUser(){
    if (userBtns.style.display === "none") {
        userBtns.style.display = "block";
    } else {
        userBtns.style.display = "none";
    }
}

songChoices.style.display = "none"
function shwSong(){ //this function changes the display of the song choices
    if (songChoices.style.display === "none") {
        songChoices.style.display = "block";
    } else {
      songChoices.style.display = "none";
    }
}

//these functions work by grabbing the ids of certain elements and inserting new values
function nSwitch(){
    videoFrame.setAttribute('src', 'https://www.youtube.com/embed/U3Ouq3IloKA?si=Sx7MPwl8wAVMLQ3U')
    background.setAttribute('src', 'https://i.ytimg.com/vi/U3Ouq3IloKA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA-tlFO5XlchpYvKlSSXN02jpdztQ')
    title.innerText=('Nothing to say - Seldon')
    desc.innerText=('"Nothing to say" by Seldon Jul 31, 2024')
}

function vSwitch(){
    videoFrame.setAttribute('src', 'https://www.youtube.com/embed/Jbuq6etv-OU?si=AcZ9r8c3Oyb1kuCC')
    background.setAttribute('src', 'https://i.ytimg.com/vi/tyKu0uZS86Q/hqdefault.jpg?sqp=-oaymwE2CPYBEIoBSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhlIFooTzAP&rs=AOn4CLBYpwLzkGb3918E7emY28fMhtZthw')
    title.innerText=('Valentine - Laufey')
    desc.innerText=('"Valentine" by Laufey Feb 14, 2022')
}

function rSwitch(){
    videoFrame.setAttribute('src', 'https://www.youtube.com/embed/EZ7J534A_WY?si=IKb3oBuEuHshpI0A')
    background.setAttribute('src', 'https://i.ytimg.com/vi/EZ7J534A_WY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLDW1w2aYC1tZcwiiCLGDDjA4NpChg')
    title.innerText=('Rambling - Kenwoojin')
    desc.innerText=('"Rambling" by Kenwoojin Mar 28, 2024')
}

document.addEventListener('DOMContentLoaded', function() {
    themeState = parseInt(localStorage.getItem('themeState')) || 0; // Default to light theme if no stored state
    applyTheme(themeState);
});


function applyTheme(state) {
    if (state === 0) { // light
        colorStyle.style.backgroundColor = '#F0EBD8';
        colorStyle.style.color = '#0e1a26';
        theme.innerText = 'Theme: Light';
    } else if (state === 1) { // dark
        colorStyle.style.backgroundColor = '#0e1a26';
        colorStyle.style.color = '#F0EBD8';
        theme.innerText = 'Theme: Dark';
    } else { // maroon (state === 2)
        colorStyle.style.backgroundColor = '#4e1407';
        colorStyle.style.color = '#ffa7a1';
        theme.innerText = 'Theme: Maroon';
    }
}