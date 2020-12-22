if (!(window.location.href).includes("api.qrserver.com")) {

    var baseLink = "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=";

    var targetLink = baseLink + window.location.href;


    var button = document.createElement('button');
    button.id = "linkToQRButton";
    button.innerHTML = "URL to QR Code";


    button.style.cssText = "all: revert; position: fixed; top: 0; right: 0; z-index: 9998";
    button.onclick = () => { createDiv(targetLink); };

    document.body.append(button);
}

function createDiv(url) {
    var div = document.createElement('div');
    div.style.cssText = "position: fixed; top: 0; right: 0; z-index: 9999";
    var x = document.createElement('button');
    x.innerText = "X";
    x.style.cssText = "all: revert; position: fixed; top: 256px; right: 256px; z-index: 100000; color:white !important; background-color: red !important; border-radius: 50%;";
    x.onclick = () => {
        div.remove();
    }
    div.append(x);
    var img = document.createElement('img');
    img.src = url;
    div.append(img);
    document.body.append(div);
}