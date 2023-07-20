console.log('registered')
let popUpLoc = 0;
const showPopUp = (url) => {
  chrome.windows.create({
    url: url,  
    type: "popup",
    width: 500,
    height: 500,
    left: popUpLoc,
    top: 0  
  });
  popUpLoc+= 500
  if (popUpLoc >= 2000) popUpLoc = 0
}


chrome.storage.onChanged.addListener(function(changes, namespace) {
    let url = '';
    console.log('hello')
    chrome.storage.local.get(['discordPopup', 'googlePopup', 'chatGPT'])
      .then(result => {
          console.log('result', typeof result, result);
          if (result.discordPopup)  {
              url = "https://www.discord.com";
          } else if (result.googlePopup) {
              url = "https://www.google.com";
          } else if (result.chatGPT) url = "https://chat.openai.com";

          if (url) showPopUp(url);
          chrome.storage.local.set({ discordPopup: false, googlePopup: false, chatGPT: false })
    })
})
