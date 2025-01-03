const button = document.createElement('button');

button.innerHTML = 'Skip Add';
button.style = `
    position: fixed; 
    bottom: 10px; 
    left: 10px; 
    z-index: 9999;
    padding: 10px;
    background-color: black;
    color: white;
    border-radius: 10px;
    border: 2px solid white;
    cursor: pointer;
`;

button.onclick = (e) => {
    let video = document.querySelector('video');
    if(!video) return;
    video.currentTime = video.duration;
};

document.body.appendChild(button);
