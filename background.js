chrome.browserAction.onClicked.addListener(function(tab) {

  chrome.tabs.executeScript({code: "console.log('FontCycler enabled.');"});
  chrome.tabs.executeScript(null, {file: "fontlist.js"});
  chrome.tabs.executeScript(null, {file: "textgetter.js"});
  chrome.tabs.executeScript(null, {file: "context_menu/appender.js"});
  chrome.tabs.executeScript(null, {file: "context_menu/controls.js"});
});