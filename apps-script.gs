function doGet(e) {
  var sheet = SpreadsheetApp.openById('1WnBujMUWmxan297Fs3kksUHytzEl5z_zrgrrTmhpnuw').getActiveSheet();
  sheet.appendRow([e.parameter.jmeno, e.parameter.datum, e.parameter.cas, e.parameter.poznamka || '', new Date()]);
  return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
}
