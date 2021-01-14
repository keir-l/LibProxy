// Background Listener

// Wait for Icon to be pressed
chrome.browserAction.onClicked.addListener(function (tab) {
	chrome.tabs.executeScript(tab.ib, {
		file: 'proxy.js'
	});
});

//Wait for Tab URL Change
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
			var url = tabs[0].url;
			function getHostName(url) {
				if (url) {
			    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
			    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
			    return match[2];
			    }
			    else {
			        return null;
			    }
			}}
			var hostname = getHostName(url);
		 var publisherURLS = ["link.springer.com", "journals.sagepub.com", "cambridge.org", "tandfonline.com", "jstor.org", "heinonline.org", "academic.oup.com"];
		 if (publisherURLS.indexOf(hostname) > -1) {
				 chrome.tabs.executeScript(tab.ib, {
			 		file: 'proxy.js'
			 	});
		 } else {
		 }
	});
});
