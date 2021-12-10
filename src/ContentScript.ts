export {};

console.log('Hello, World Idle Detector!');

chrome.runtime.onMessage.addListener((message, messageSender, sendResponse) => {
  if (message.type == 'print') {
    console.log('----------------- Idle Records');
    console.dir(message.records);
    sendResponse({ message: 'OK' });
  }
})

