console.log('Welcome to background Page');

console.log('chrome Identity  = ', chrome.identity);

chrome.identity.getAuthToken({ interactive: true }, function (token) {
 if (chrome.runtime.lastError) {
  callback(chrome.runtime.lastError);
  return;
 }
 access_token = token;
});