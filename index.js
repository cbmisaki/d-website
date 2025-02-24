// khai bao bien loops
let loopsDom = document.querySelector('.loops');

// khai bao class contain items
let listItemDom = document.querySelector('.loops .list');

// thumbnail class
let thumbnailDom = document.querySelector('.loops .thumbnail');

let timeRunning = 3000;
let timeAutoNext = 20000;
let runTimeOut;
let runAutoRun;

function showSlider(){
    let itemSlider = document.querySelectorAll('.loops .list .item');
    let itemThumbnail = document.querySelectorAll('.loops .thumbnail .item');

    // Auto switch: push the first item to the end
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    loopsDom.classList.add('next');

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        loopsDom.classList.remove('next');
    }, timeRunning)

    clearTimeout(runAutoRun);
    runAutoRun = setTimeout(() => {
        showSlider();
    }, timeAutoNext);
}

// Start auto switching
showSlider();

