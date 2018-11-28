// this is the background code...

// listen for our browerAction to be clicked
chrome.browserAction.onClicked.addListener(function (tab) {
	// for the current tab, inject the "inject.js" file & execute it
	chrome.tabs.executeScript(tab.ib, {
		file: 'proxy.js'
	});
});
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
			var url = tabs[0].url;
			function getHostName(url) {
			    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
			    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
			    return match[2];
			    }
			    else {
			        return null;
			    }
			}
			var hostname = getHostName(url);
		 var publisherURLS = ["journals.sagepub.com", "cambridge.org", "tandfonline.com", "jstor.org", "heinonline.org", "academic.oup.com"];
		 if (publisherURLS.indexOf(hostname) > -1) {
		     console.log("Publisher " + hostname + " found, redirecting...");
				 chrome.tabs.executeScript(tab.ib, {
			 		file: 'proxy.js'
			 	});
		 } else {
		     console.log(hostname + " does not need to be redirected");
		 }
	});
});
