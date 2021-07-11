function isSurfFOrecastUrl(url){
  console.log(url)
   return url.includes("surf-forecast.com") && url.includes("forecasts/latest/six_day");
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status && changeInfo.status == "loading" && isSurfFOrecastUrl(tab.url)) {
    chrome.tabs.executeScript(null, { file: './foreground.js' }, () => console.log('Injected script'))
  }
});
  