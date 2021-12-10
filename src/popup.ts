import type { IdleRecord } from "./RecordTypes";

chrome.runtime.sendMessage({ message: 'getRecords' }, (response) => {
  const records: IdleRecord[] = response.records;
  const elem = document.getElementById('root')!;
  elem.innerHTML = records.length === 0 ? 'No records.' : records.map(r => `${r.time}: ${r.idleState}`).join('<br>');
});
