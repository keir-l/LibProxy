function onError(error) {
 console.log(`Error: ${error}`);
}

var l = window.location,
    path = l.pathname,
    host = l.host;

function onGot(item) {
 let url = "url";
 if (item.url) {
   url = item.url;
 }
if (!/ac.uk/.test(l.host)) {
    if (l.protocol === 'https:') {
        host = host.replace(/\./g, '-')
    }
    l.href = l.protocol + '//0-' + host + '.' + url + path + l.search
}
}

let getting = browser.storage.sync.get("url");
getting.then(onGot, onError);
