//Create a Context Action for every link
browser.contextMenus.create({
    id: "create-qr-code-for-link",
    title: "Generate QR Code for this link",
    contexts: ["link"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "create-qr-code-for-link") {
        //Execute QR Code generation in current tab 
        browser.tabs.executeScript(tab.id, {
            //TODO: Should work, but doesn't  
            code: `var loc = ` + info.linkUrl + `; var link = "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=" + loc;window.open(link, 'QRCode', 'height=256, width=256');`
        });
    }
});