function getRandomImage() {
    let img = document.createElement("img");
    let src = document.getElementById("gallery");
    let randomImagePointer = document.getElementById("random-image");
    if (!randomImagePointer) {
        img.id = "random-image";
        img.src = "https://picsum.photos/400?";
        src.appendChild(img);
    } else {
        img.id = "random-image";
        img.src = "https://picsum.photos/400?" + Math.random();
        src.replaceChild(img, randomImagePointer);
    }
}

function clearImage() {
    let src = document.getElementById("gallery");
    src.innerHTML = null;
}

function renderImageGen() {
    clearBody();
    let body = document.getElementById("body");
    let btn = document.createElement("button");
    btn.innerHTML = "Get Random Image";
    btn.setAttribute("onclick", "getRandomImage()");
    btn.classList.add('btn');
    btn.classList.add('btn-outline-primary');
    body.appendChild(btn);

    let btn2 = document.createElement("button");
    btn2.innerHTML = "Remove image";
    btn2.setAttribute("onclick", "clearImage()");
    btn2.classList.add('btn');
    btn2.style.marginLeft = "5px";
    btn2.classList.add('btn-outline-primary');
    body.appendChild(btn2);

    let div = document.createElement("div");
    div.id = "gallery";
    div.style.paddingBottom = "3em";
    body.appendChild(div);

}