chrome.contextMenus.create({
  id: "copy_report",
  title: "Copy report with error",
  contexts: ["selection"], // ContextType
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  chrome.tabs.executeScript(tab.id, { file: "js/copy_report.js" });
});
