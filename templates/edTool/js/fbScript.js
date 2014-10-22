
function loginfacebook(callback) {
    chrome.windows.create(
        {
         'url' : "https://www.facebook.com/dialog/oauth?"
           //+ "display=popup&"
           + "client_id=1499040217016875&"
           + "redirect_uri="
           + "https://www.facebook.com/connect/"
          + "login_success.html",
          //+ "scope=publish_actions&response_type=token",
        'width' : 580,
        'height' : 400
       },
       function(popupWindow) {
            chrome.tabs.query({
             active : true
            },
            function(tabs) {
             tabid = tabs[0].id;
             chrome.tabs.onUpdated.addListener(function(tabid, tab) {
                 var token = extractToken(tab.url);
                 localStorage.accessToken = token;
 
                 var expires_in = extractExpiry(tab.url);
                 var currentDate = new Date();
                 var expiryTime = currentDate.getTime() + 1000 * (expires_in - 300);
                 localStorage.expiryTime = expiryTime;
                 chrome.windows.remove(popupWindow.id);
                 callback();
             });
          });
  });
}
