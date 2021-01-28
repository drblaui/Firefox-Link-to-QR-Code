// Because it would be stupid to make a QR Code of the website that makes QR Codes
if (!(window.location.href).includes("api.qrserver.com")) {
    //Create button
    var button = document.createElement('button');
    button.id = "linkToQRButton";
    button.innerHTML = "URL to QR Code";
    //Revert all style changes on the website (since they look weird otherwise)
    button.style.cssText = "all: revert; position: fixed; top: 0; right: 0; z-index: 9998";
    button.onclick = () => {
        createDiv();
        //console.log("Test");
    };
    document.body.append(button);
}

//This is kinda hacky? Oh well
setInterval(() => {
    var img = document.getElementById("firefox-link-to-qr-image");
    var baseLink = "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=";
    var targetLink = baseLink + window.location.href;
    if (img.src != targetLink) {
        img.src = targetLink;
    }
}, 1);


function createDiv() {
    //Every QR Code should be 256x256, because that's big enough
    //TODO: Option to change QR Code size
    var baseLink = "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=";

    // Append current URL as data
    var targetLink = baseLink + window.location.href;
    //Create div that is (hopefully) always on top of everything
    var div = document.createElement('div');
    div.style.cssText = "position: fixed; top: 0; right: 0; z-index: 9999";

    //Close button
    var x = document.createElement('button');
    x.innerText = "X";
    x.style.cssText = "all: revert; position: fixed; top: 256px; right: 256px; z-index: 100000; color:white; background-color: red; border-radius: 50%;";
    x.onclick = () => {
        div.remove();
    }
    div.append(x);

    //QR Code
    var img = document.createElement('img');
    img.id = "firefox-link-to-qr-image"
    img.src = targetLink;
    div.append(img);
    document.body.append(div);
}