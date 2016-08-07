chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript({code: "console.log('FontCycler enabled.');"});
  chrome.tabs.executeScript(null, {file: "app.min.js"});

});