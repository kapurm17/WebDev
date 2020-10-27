console.log("Helo extension");

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      var firstHref = "Recieved a message";

      console.log(firstHref);

      chrome.runtime.sendMessage({"message": "open_new_tab", "url": "www.google.com"});
    }
  }
);
