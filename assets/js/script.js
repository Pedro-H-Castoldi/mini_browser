const windowFrame = window.open('./home/index.html', 'frameTab');

const opening = document.querySelector('#more');
const closing = document.querySelector('#close');
let boolean = true;
let input = document.querySelector('#url input')

let search = function() {
    
    if(input.value.trim().length){
        opening.style.display = "none";
        closing.style.display = "block";

        url = input.value;
        windowFrame.location.assign(url);

        detailsIframe();
    }
}

input.addEventListener('keypress', e => {
    if(e.keyCode === 13) {
        search();
    }
})

document.querySelector('#go').addEventListener('click', search);

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