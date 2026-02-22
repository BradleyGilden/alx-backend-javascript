/**
 * Subject: Test Pkg
 * Author: Bradley Gilden
 * Date: Fri Nov 07 2025 
 * 
 * Summary:
 * 
 * 
 * Changelog:
 * Fri Nov 07 2025 - Bradley Gilden: Initial version
 * 
 */
;(function(SETTINGS){
  const ACCOUNT = SETTINGS.account;
  let url = '/sheets/5400134671093636/attachments/8006709345292164'

  let options = {};

  let download_link = parse(http_get(url, 'smartsheets'))
  // logVerbose(buffer)
  // logVerbose('after')

  // const res = parse(http_get('/attachments/storage', 'Xurrent-CF-Attachments'))
  // log('response', res)
  // log('upload uri', res?.upload_uri)


  logVerbose('download link from SS', typeof download_link)

  options = {
    url: download_link.url.replace(/^https:\/\/[^/]+/, ''),
    method: 'GET',
  }
  const file_name = download_link.name

  logVerbose('options', options)


  let file = http_request_file(options, 'smartsheets-attachments')

  logVerbose('download headers', file.headers)
  logVerbose('download status', file.statusCode)

  const res = update('requests', 12500945, {
    custom_fields_attachments: [
      {
          filename: file_name,
          content: file.content,
          custom_field_id: "job_card_attachment"
      }
    ]
  }, 'HelpHubTech-Vexall')

  logVerbose('upload response', res)

  //EXAMPLE OUTPUT

//   {
//   id: 2016531342462852,
//   name: "job card - test data.pdf",
//   url: "https://s3.amazonaws.com/SmartsheetB1/9267b9f965694684b4281e3734db1768?response-content-disposition=attachment%3Bfilename%3D%22job+card+-+test+data.pdf%22%3Bfilename*%3DUTF-8%27%27job%2520card%2520-%2520test%2520data.pdf&Signature=tcitUMsi312hrBH8zU7MmcXtnSM%3D&Expires=1771753455&AWSAccessKeyId=11950YFEZZJFSSKKB3G2",
//   attachmentType: "FILE",
//   mimeType: "application/pdf",
//   urlExpiresInMillis: 60000,
//   sizeInKb: 73,
//   parentType: "ROW",
//   parentId: 4344974086442884,
//   createdAt: "2026-02-20T10:30:10Z",
//   createdBy: { name: "Bradley Gilden", email: "bgilden@mrpricegroup.com" },
// }

  //logVerbose(`Task ${event}: ${source.body.object_id} - person: ${source.body.person_id} - audit id: ${source.body.payload.audit_line_id} `);

  // const req = fetch('ui_extensions', 110099, ACCOUNT)
  // log(req.form_definition_json)
})(COMA_SETTINGS)