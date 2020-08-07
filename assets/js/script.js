const windowFrame = window.open('./home/index.html', 'frameTab');

const opening = document.querySelector('#more');
const closing = document.querySelector('#close');
let boolean = true;

document.querySelector('#go').addEventListener('click', function() {
    
    opening.style.display = "none";
    closing.style.display = "block";

    let url = document.querySelector('#url input').value;
    windowFrame.location.assign(url);

    detailsIframe();
});

opening.addEventListener('click', function() {
    
    opening.style.display = "none";
    closing.style.display = "block";
    
    windowFrame.location.assign('./home/index.html');
});

closing.addEventListener('click', function() {
    
    closing.style.display = "none";
    opening.style.display = "block";

    document.querySelector('#url input').value = '';
    windowFrame.location.assign('about:blank');
});

document.querySelector('#datas').addEventListener('click', function() {
    
    if(boolean) {
        document.getElementById('details').style.display = "flex";
        boolean = false;
    }
    else {
        document.getElementById('details').style.display = "none";
        boolean = true;
    }
});

function detailsIframe() {
    
    document.querySelector('#width-height').innerHTML = windowFrame.innerWidth + 'x' + windowFrame.innerHeight;
    document.querySelector('#iframe-url').innerHTML = windowFrame.location.href;
    document.querySelector('#protocol').innerHTML = windowFrame.location.protocol;
    document.querySelector('#port').innerHTML = windowFrame.location.port;
    document.querySelector('#so').innerHTML = windowFrame.navigator.platform;
}

detailsIframe();