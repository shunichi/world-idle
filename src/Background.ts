import type { IdleRecord } from "./RecordTypes";

console.log('Hello, World Idle Detector Background JS');

// chrome.browserAction.onClicked.addListener((tab) => {
//   if (tab == null || tab.id == null) return;
//   const tabId = tab.id;
//   chrome.storage.local.get('records', (items) => {
//     if (items) {
//       const records: IdleRecord[] = items.records || [];
//       chrome.tabs.sendMessage(tabId, { type: "print", records }, (response: any) => {
//         console.log(response);
//       });
//     }
//   });
// });

// const dummyRecords: IdleRecord[] = [
//   {
//     time: new Date().toISOString(),
//     idleState: 'idle',
//   },
//   {
//     time: new Date().toISOString(),
//     idleState: 'active',
//   },
// ];

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  chrome.storage.local.get('records', (items) => {
    const records: IdleRecord[] = items.records || [];
    // const records = dummyRecords;
    sendResponse({records});
  });
  return true;
});

const MAX_RECORDS = 100;

function AddRecord(idleState: chrome.idle.IdleState) {
  const time = new Date().toISOString();
  console.log(`${time}: ${idleState}`);
  chrome.storage.local.get('records', (items) => {
    if (items) {
      const records: IdleRecord[] = items.records || [];
      records.push({ time, idleState });
      if (records.length > MAX_RECORDS)
        records.splice(0, records.length - MAX_RECORDS);
      chrome.storage.local.set({ records });
    }
  });
}

chrome.idle.onStateChanged.addListener(AddRecord);
