const imageContainerEl = document.querySelector('.image-container');
const btnEl = document.querySelector('.btn');

btnEl.addEventListener('click',  () => {
    imageNum = 10
    addNewImage();
});

function addNewImage(){
    for(let index = 0; index < imageNum; index++){
        const newImageEl = document.createElement('img');
        newImageEl.src = `https://picsum.photos/300?${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImageEl);
    }
}