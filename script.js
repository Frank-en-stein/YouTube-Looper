var work = false;
var timer;
checkit();

function checkit() {
	chrome.storage.sync.get(/* String or Array */["status"], function(items){
	
		  if(Object.keys(items).length===0 || items["status"]=="off") {
			  work = false;
		  }
		  else {
			  work = true;
		  }
	});
	if($(".ytp-play-button").attr("title")=="Replay" && work) {
		$(".ytp-play-button").click();
	}
	timer = setTimeout(checkit, 3000);
}