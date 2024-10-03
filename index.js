// linking the buttons to the js
let songChoices = document.getElementById('songChoices');
let videoFrame = document.getElementById('videoFrame');
let background = document.getElementById('background')
let title = document.getElementById('title')
let desc = document.getElementById('desc')
let colorStyle = document.getElementById('colorStyle')
let theme = document.getElementById("theme")


// 'state of the website' starts at 0
let state = 0

function themeSwitch(){
    const light = 0 //light mode is represented as a 0 (default)
    const dark = 1 //dark mode is represented as a 1
    const maroon = 2

    if (state === light) { //if the button is clicked, and state is equal to light: 
        colorStyle.style.backgroundColor=('#0e1a26'); //the background will switch to dark
        colorStyle.style.color=('#F0EBD8'); //the text will switch for better readablity
        theme.innerText=('Theme: Dark');

        state = 1; //and the state becomes 1 (making the state equal to dark)
    }


    else if (state === dark) { 
        colorStyle.style.backgroundColor=('#4e1407');
        colorStyle.style.color=('#ffa7a1');
        theme.innerText=('Theme: Maroon');

        state = 2; //state equals 2 
    }

    else if (state == maroon) {
        colorStyle.style.backgroundColor=('#F0EBD8');
        colorStyle.style.color=('#0e1a26');
        theme.innerText=('Theme: Light');

        state = 0; //state equals 0
    }

}


function show(){ //this function changes the display of the song choices
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
