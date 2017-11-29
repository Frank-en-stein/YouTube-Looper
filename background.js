chrome.browserAction.onClicked.addListener(function(tab) { 
	chrome.storage.sync.get(/* String or Array */["status"], function(items){
		  if(Object.keys(items).length===0 || items["status"]=="off") {
			  chrome.storage.sync.set({ "status": "on" }, function(){});
			  chrome.browserAction.setBadgeBackgroundColor({color:[0, 190, 0, 230]});
			  chrome.browserAction.setBadgeText({text:"ON"});
		  }
		  else {
			chrome.storage.sync.set({ "status": "off" }, function(){});
			chrome.browserAction.setBadgeBackgroundColor({color:[190, 0, 0, 230]});
			chrome.browserAction.setBadgeText({text:"OFF"});
		  }
	});
});

chrome.storage.sync.get(/* String or Array */["status"], function(items){
		  if(Object.keys(items).length===0 || items["status"]=="off") {
			  chrome.browserAction.setBadgeBackgroundColor({color:[190, 0, 0, 230]});
			  chrome.browserAction.setBadgeText({text:"OFF"});
		  }
		  else {
			  chrome.browserAction.setBadgeBackgroundColor({color:[0, 190, 0, 230]});
			  chrome.browserAction.setBadgeText({text:"ON"});
		  }
	});
