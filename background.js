browser.contextMenus.create({
    id: "create-qr-code-for-link",
    title: "Generate QR Code for this link",
    contexts: ["link"]
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "create-qr-code-for-link") {
        browser.tabs.executeScript(tab.id, {
            code: `var loc = window.location.href; var link = "https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=" + loc; window.open(link, 'QRCode', 'height=256, width=256');`
        });
    }
});