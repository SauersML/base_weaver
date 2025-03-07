function addMeowToTweets() {
  const tweetElements = document.querySelectorAll('div[data-testid="tweetText"]');
  tweetElements.forEach(tweet => {
    if (!tweet.textContent.endsWith(" meow")) {
      tweet.textContent = tweet.textContent + " meow";
    }
  });
}

addMeowToTweets();
const observer = new MutationObserver(addMeowToTweets);
observer.observe(document.body, { childList: true, subtree: true });
