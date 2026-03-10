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



testdata =  {
  id: 4344974086442884,
  sheetId: 5400134671093636,
  rowNumber: 6,
  siblingId: 8826852831072132,
  version: 105,
  expanded: true,
  accessLevel: 'ADMIN',
  createdAt: '2026-02-11T07:13:44Z',
  modifiedAt: '2026-03-02T08:26:49Z',
  cells: [
    {
      columnId: 2262296083255172,
      columnType: 'TEXT_NUMBER',
      value: 'MRP-707',
      displayValue: 'MRP-707'
    },
    {
      columnId: 6765895710625668,
      columnType: 'TEXT_NUMBER',
      value: 77283383,
      displayValue: '77283383'
    },
    {
      columnId: 573446222991236,
      columnType: 'TEXT_NUMBER',
      value: 10451,
      displayValue: '10451'
    },
    {
      columnId: 2825246036676484,
      columnType: 'PICKLIST',
      value: 'SUNMI P2 ND050 CRADLE',
      displayValue: 'SUNMI P2 ND050 CRADLE'
    },
    {
      columnId: 291971246280580,
      columnType: 'TEXT_NUMBER',
      value: 'SCANNERS',
      displayValue: 'SCANNERS'
    },
    {
      columnId: 2121558594899844,
      columnType: 'PICKLIST',
      value: 'Older than depreciation age',
      displayValue: 'Older than depreciation age'
    },
    {
      columnId: 6202945757204356,
      columnType: 'DATE',
      value: '2026-02-03'
    },
    {
      columnId: 7328845664046980,
      columnType: 'TEXT_NUMBER',
      value: 'NEWLAND NLS-HR2440 Scanner',
      displayValue: 'NEWLAND NLS-HR2440 Scanner'
    },
    {
      columnId: 1417871153123204,
      columnType: 'TEXT_NUMBER',
      value: 3223,
      displayValue: 'R3,223.00'
    },
    {
      columnId: 7047370687336324,
      columnType: 'CHECKBOX',
      value: false
    },
    {
      columnId: 3106721013387140,
      columnType: 'DATE',
      value: '2026-03-02'
    },
    { columnId: 5499258315427716, columnType: 'CHECKBOX' },
    {
      columnId: 8291517234630532,
      columnType: 'TEXT_NUMBER',
      value: 'approved',
      displayValue: 'approved'
    },
    {
      columnId: 973167840153476,
      columnType: 'TEXT_NUMBER',
      value: 12544581,
      displayValue: '12544581'
    },
    {
      columnId: 7751058129112964,
      columnType: 'TEXT_NUMBER',
      value: 'approved by bot user',
      displayValue: 'approved by bot user'
    },
    { columnId: 8422745950605188, columnType: 'CHECKBOX' },
    { columnId: 1104396556128132, columnType: 'TEXT_NUMBER' },
    { columnId: 5607996183498628, columnType: 'DATE' },
    { columnId: 3356196369813380, columnType: 'PICKLIST' },
    { columnId: 7859795997183876, columnType: 'PICKLIST' },
    { columnId: 2230296462970756, columnType: 'TEXT_NUMBER' },
    { columnId: 6733896090341252, columnType: 'PICKLIST' },
    { columnId: 4482096276656004, columnType: 'PICKLIST' },
    { columnId: 8985695904026500, columnType: 'TEXT_NUMBER' },
    { columnId: 31273207418756, columnType: 'TEXT_NUMBER' },
    { columnId: 4534872834789252, columnType: 'PICKLIST' },
    { columnId: 2283073021104004, columnType: 'TEXT_NUMBER' },
    { columnId: 6786672648474500, columnType: 'TEXT_NUMBER' },
    { columnId: 1157173114261380, columnType: 'PICKLIST' },
    { columnId: 5660772741631876, columnType: 'TEXT_NUMBER' },
    { columnId: 3408972927946628, columnType: 'PICKLIST' },
    { columnId: 7912572555317124, columnType: 'TEXT_NUMBER' },
    { columnId: 594223160840068, columnType: 'TEXT_NUMBER' },
    { columnId: 5097822788210564, columnType: 'TEXT_NUMBER' },
    { columnId: 2846022974525316, columnType: 'CHECKBOX' },
    { columnId: 7349622601895812, columnType: 'CHECKBOX' },
    { columnId: 1720123067682692, columnType: 'DATE' },
    { columnId: 6223722695053188, columnType: 'CHECKBOX' },
    { columnId: 3971922881367940, columnType: 'DATE' },
    { columnId: 8475522508738436, columnType: 'TEXT_NUMBER' },
    { columnId: 312748184129412, columnType: 'PICKLIST' },
    { columnId: 4816347811499908, columnType: 'CHECKBOX' },
    { columnId: 2564547997814660, columnType: 'PICKLIST' },
    { columnId: 7068147625185156, columnType: 'TEXT_NUMBER' },
    { columnId: 1438648090972036, columnType: 'TEXT_NUMBER' },
    { columnId: 5942247718342532, columnType: 'TEXT_NUMBER' },
    { columnId: 3690447904657284, columnType: 'CHECKBOX' },
    { columnId: 8194047532027780, columnType: 'CHECKBOX' },
    { columnId: 875698137550724, columnType: 'CHECKBOX' },
    { columnId: 5379297764921220, columnType: 'CHECKBOX' },
    { columnId: 3127497951235972, columnType: 'CHECKBOX' },
    { columnId: 7631097578606468, columnType: 'CHECKBOX' },
    { columnId: 2001598044393348, columnType: 'CHECKBOX' },
    { columnId: 6505197671763844, columnType: 'TEXT_NUMBER' },
    { columnId: 4253397858078596, columnType: 'TEXT_NUMBER' },
    { columnId: 8756997485449092, columnType: 'TEXT_NUMBER' },
    { columnId: 172010695774084, columnType: 'TEXT_NUMBER' },
    { columnId: 4675610323144580, columnType: 'CHECKBOX' },
    { columnId: 2423810509459332, columnType: 'CHECKBOX' },
    { columnId: 6927410136829828, columnType: 'CHECKBOX' },
    { columnId: 1297910602616708, columnType: 'TEXT_NUMBER' },
    { columnId: 5801510229987204, columnType: 'CHECKBOX' },
    { columnId: 3549710416301956, columnType: 'TEXT_NUMBER' },
    { columnId: 8053310043672452, columnType: 'TEXT_NUMBER' },
    { columnId: 734960649195396, columnType: 'TEXT_NUMBER' },
    { columnId: 5238560276565892, columnType: 'TEXT_NUMBER' },
    { columnId: 2986760462880644, columnType: 'PICKLIST' },
    { columnId: 7490360090251140, columnType: 'CONTACT_LIST' },
    { columnId: 1860860556038020, columnType: 'TEXT_NUMBER' },
    { columnId: 6364460183408516, columnType: 'CHECKBOX' },
    { columnId: 4112660369723268, columnType: 'CHECKBOX' },
    { columnId: 8616259997093764, columnType: 'DATE' },
    { columnId: 453485672484740, columnType: 'CHECKBOX' },
    { columnId: 4957085299855236, columnType: 'DATE' },
    { columnId: 2705285486169988, columnType: 'CHECKBOX' },
    { columnId: 7208885113540484, columnType: 'TEXT_NUMBER' },
    { columnId: 1579385579327364, columnType: 'TEXT_NUMBER' },
    { columnId: 6082985206697860, columnType: 'CHECKBOX' },
    { columnId: 3831185393012612, columnType: 'TEXT_NUMBER' },
    { columnId: 8334785020383108, columnType: 'TEXT_NUMBER' },
    { columnId: 1016435625906052, columnType: 'TEXT_NUMBER' }
  ],
  columns: [
    {
      id: 2262296083255172,
      version: 0,
      index: 0,
      title: 'Supplier Request ID',
      type: 'TEXT_NUMBER',
      primary: true,
      validation: false,
      width: 135
    },
    {
      id: 6765895710625668,
      version: 0,
      index: 1,
      title: 'Original Incident Ref',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 146
    },
    {
      id: 573446222991236,
      version: 0,
      index: 2,
      title: 'Store Code',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 93
    },
    {
      id: 2825246036676484,
      version: 0,
      index: 3,
      title: 'Faulty Product',
      type: 'PICKLIST',
      options: [Array],
      validation: true,
      width: 287
    },
    {
      id: 291971246280580,
      version: 0,
      index: 4,
      title: 'Fault Description',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 264
    },
    {
      id: 2121558594899844,
      version: 0,
      index: 5,
      title: 'Reason for MRP Cost',
      type: 'PICKLIST',
      options: [Array],
      validation: true,
      width: 268
    },
    {
      id: 6202945757204356,
      version: 0,
      index: 6,
      title: 'Date Of Purchase',
      type: 'DATE',
      validation: false,
      width: 150
    },
    {
      id: 7328845664046980,
      version: 0,
      index: 7,
      title: 'Replacement Product',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 356
    },
    {
      id: 1417871153123204,
      version: 0,
      index: 8,
      title: 'Replacement Quote Price',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 214
    },
    {
      id: 7047370687336324,
      version: 0,
      index: 9,
      title: 'Ready for MRP Approval',
      type: 'CHECKBOX',
      validation: false,
      width: 150
    },
    {
      id: 3106721013387140,
      version: 0,
      index: 10,
      title: 'Approval',
      type: 'DATE',
      validation: true,
      width: 150
    },
    {
      id: 5499258315427716,
      version: 0,
      index: 11,
      title: 'MRP Rejected',
      type: 'CHECKBOX',
      validation: true,
      width: 150
    },
    {
      id: 8291517234630532,
      version: 0,
      index: 12,
      title: 'MRP Status',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 973167840153476,
      version: 0,
      index: 13,
      title: 'MRP Reference',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 7751058129112964,
      version: 0,
      index: 14,
      title: 'MRP Notes',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 249
    },
    {
      id: 8422745950605188,
      version: 0,
      index: 15,
      title: 'Hyperlink Fixed',
      type: 'CHECKBOX',
      symbol: 'STAR',
      validation: true,
      width: 288
    },
    {
      id: 1104396556128132,
      version: 0,
      index: 16,
      title: 'MRP Task',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 146
    },
    {
      id: 5607996183498628,
      version: 0,
      index: 17,
      title: 'installation date',
      type: 'DATE',
      validation: true,
      width: 150
    },
    {
      id: 3356196369813380,
      version: 0,
      index: 18,
      title: 'Store Name',
      type: 'PICKLIST',
      options: [Array],
      validation: true,
      width: 415
    },
    {
      id: 7859795997183876,
      version: 0,
      index: 19,
      title: 'UploadedBy',
      type: 'PICKLIST',
      options: [Array],
      validation: false,
      width: 99
    },
    {
      id: 2230296462970756,
      version: 0,
      index: 20,
      title: 'Division',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 179
    },
    {
      id: 6733896090341252,
      version: 0,
      index: 21,
      title: 'Device Category',
      type: 'PICKLIST',
      options: [Array],
      validation: false,
      width: 127
    },
    {
      id: 4482096276656004,
      version: 0,
      index: 22,
      title: 'Device',
      type: 'PICKLIST',
      options: [Array],
      validation: true,
      width: 287
    },
    {
      id: 8985695904026500,
      version: 0,
      index: 23,
      title: 'Replacement Model',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 356
    },
    {
      id: 31273207418756,
      version: 0,
      index: 24,
      title: 'Device Asset Tag',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 130
    },
    {
      id: 4534872834789252,
      version: 0,
      index: 25,
      title: 'End Of Depreciation Date',
      type: 'PICKLIST',
      options: [Array],
      validation: false,
      width: 186
    },
    {
      id: 2283073021104004,
      version: 0,
      index: 26,
      title: 'Depreciation Age',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 6786672648474500,
      version: 0,
      index: 27,
      title: 'Fault Assessment',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 264
    },
    {
      id: 1157173114261380,
      version: 0,
      index: 28,
      title: 'RepairVendor',
      type: 'PICKLIST',
      options: [Array],
      validation: false,
      width: 184
    },
    {
      id: 5660772741631876,
      version: 0,
      index: 29,
      title: 'Device Serial',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 196
    },
    {
      id: 3408972927946628,
      version: 0,
      index: 30,
      title: 'Repair/Replace',
      type: 'PICKLIST',
      options: [Array],
      validation: true,
      width: 150
    },
    {
      id: 7912572555317124,
      version: 0,
      index: 31,
      title: 'Repair Quote Price R',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 214
    },
    {
      id: 594223160840068,
      version: 0,
      index: 32,
      title: 'Sales Quote Number',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 132
    },
    {
      id: 5097822788210564,
      version: 0,
      index: 33,
      title: 'Quote PO number',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 93
    },
    {
      id: 2846022974525316,
      version: 0,
      index: 34,
      title: 'Vexall Cost',
      type: 'CHECKBOX',
      validation: false,
      width: 75
    },
    {
      id: 7349622601895812,
      version: 0,
      index: 35,
      title: 'MRP Cost',
      type: 'CHECKBOX',
      validation: false,
      width: 75
    },
    {
      id: 1720123067682692,
      version: 0,
      index: 36,
      title: 'Loaded to Live Sheet',
      type: 'DATE',
      validation: false,
      width: 150
    },
    {
      id: 6223722695053188,
      version: 0,
      index: 37,
      title: 'Quote Replacement',
      type: 'CHECKBOX',
      symbol: 'FLAG',
      validation: false,
      width: 141
    },
    {
      id: 3971922881367940,
      version: 0,
      index: 38,
      title: 'Uploaded Date',
      type: 'DATE',
      validation: false,
      width: 96
    },
    {
      id: 8475522508738436,
      version: 0,
      index: 39,
      title: 'Notes',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 381
    },
    {
      id: 312748184129412,
      version: 0,
      index: 40,
      title: 'Vexall Validation',
      type: 'PICKLIST',
      options: [Array],
      validation: true,
      width: 141
    },
    {
      id: 4816347811499908,
      version: 0,
      index: 41,
      title: 'Warranty',
      type: 'CHECKBOX',
      symbol: 'STAR',
      validation: false,
      width: 75
    },
    {
      id: 2564547997814660,
      version: 0,
      index: 42,
      title: 'Quote Attached',
      type: 'PICKLIST',
      options: [Array],
      validation: true,
      width: 150
    },
    {
      id: 7068147625185156,
      version: 0,
      index: 43,
      title: 'Replacement Price',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 1438648090972036,
      version: 0,
      index: 44,
      title: 'Replacement Asset #',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 199
    },
    {
      id: 5942247718342532,
      version: 0,
      index: 45,
      title: 'Waybill NO',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 3690447904657284,
      version: 0,
      index: 46,
      title: 'Stock Received on Waybill',
      type: 'CHECKBOX',
      validation: false,
      width: 150
    },
    {
      id: 8194047532027780,
      version: 0,
      index: 47,
      title: 'Converted Bond -> Maintenance',
      type: 'CHECKBOX',
      validation: false,
      width: 223
    },
    {
      id: 875698137550724,
      version: 0,
      index: 48,
      title: 'Converted De-installed -> Maintenance',
      type: 'CHECKBOX',
      validation: false,
      width: 265
    },
    {
      id: 5379297764921220,
      version: 0,
      index: 49,
      title: 'Converted OPS -> Maintenance',
      type: 'CHECKBOX',
      validation: true,
      width: 75
    },
    {
      id: 3127497951235972,
      version: 0,
      index: 50,
      title: 'Converted Maintenance -> OPS',
      type: 'CHECKBOX',
      validation: true,
      width: 150
    },
    {
      id: 7631097578606468,
      version: 0,
      index: 51,
      title: 'Faulty Unit Scrapped',
      type: 'CHECKBOX',
      validation: false,
      width: 75
    },
    {
      id: 2001598044393348,
      version: 0,
      index: 52,
      title: 'Sharon Approved',
      type: 'CHECKBOX',
      symbol: 'FLAG',
      validation: true,
      width: 130
    },
    {
      id: 6505197671763844,
      version: 0,
      index: 53,
      title: 'Count of Repair Ref',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 4253397858078596,
      version: 0,
      index: 54,
      title: 'Duplicate Serial',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 8756997485449092,
      version: 0,
      index: 55,
      title: 'Amount per store',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 172010695774084,
      version: 0,
      index: 56,
      title: 'Line #',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 4675610323144580,
      version: 0,
      index: 57,
      title: 'Quote Deleted',
      type: 'CHECKBOX',
      validation: true,
      width: 75
    },
    {
      id: 2423810509459332,
      version: 0,
      index: 58,
      title: 'Sharon to Quote',
      type: 'CHECKBOX',
      validation: false,
      width: 75
    },
    {
      id: 6927410136829828,
      version: 0,
      index: 59,
      title: "Gerard's Approval",
      type: 'CHECKBOX',
      symbol: 'FLAG',
      validation: true,
      width: 75
    },
    {
      id: 1297910602616708,
      version: 0,
      index: 60,
      title: 'Gerard Quote notes',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 757
    },
    {
      id: 5801510229987204,
      version: 0,
      index: 61,
      title: 'Ticket moved',
      type: 'CHECKBOX',
      validation: true,
      width: 75
    },
    {
      id: 3549710416301956,
      version: 0,
      index: 62,
      title: 'Installed Stock Asset #',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 8053310043672452,
      version: 0,
      index: 63,
      title: 'Installation Ticket',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 734960649195396,
      version: 0,
      index: 64,
      title: 'Region',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 5238560276565892,
      version: 0,
      index: 65,
      title: 'Auto Approve',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 2986760462880644,
      version: 0,
      index: 66,
      title: 'Auto Approve Replacement?',
      type: 'PICKLIST',
      options: [Array],
      validation: true,
      width: 150
    },
    {
      id: 7490360090251140,
      version: 0,
      index: 67,
      title: 'Approved By',
      type: 'CONTACT_LIST',
      validation: false,
      width: 150
    },
    {
      id: 1860860556038020,
      version: 0,
      index: 68,
      title: 'Vexall Notes',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 1000
    },
    {
      id: 6364460183408516,
      version: 0,
      index: 69,
      title: 'do not load yet',
      type: 'CHECKBOX',
      symbol: 'STAR',
      validation: false,
      width: 150
    },
    {
      id: 4112660369723268,
      version: 0,
      index: 70,
      title: 'End of Life',
      type: 'CHECKBOX',
      symbol: 'STAR',
      validation: true,
      width: 75
    },
    {
      id: 8616259997093764,
      version: 0,
      index: 71,
      title: 'Shipped To OOSA',
      type: 'DATE',
      validation: false,
      width: 150
    },
    {
      id: 453485672484740,
      version: 0,
      index: 72,
      title: 'JC Issue',
      type: 'CHECKBOX',
      validation: false,
      width: 150
    },
    {
      id: 4957085299855236,
      version: 0,
      index: 73,
      title: 'Sent for Scrapping Approval',
      type: 'DATE',
      validation: true,
      width: 150
    },
    {
      id: 2705285486169988,
      version: 0,
      index: 74,
      title: 'GDK Screen',
      type: 'CHECKBOX',
      symbol: 'FLAG',
      validation: false,
      width: 150
    },
    {
      id: 7208885113540484,
      version: 0,
      index: 75,
      title: 'Scrapping month',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 75
    },
    {
      id: 1579385579327364,
      version: 0,
      index: 76,
      title: 'Box #',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 6082985206697860,
      version: 0,
      index: 77,
      title: 'Scrapped Jira assets',
      type: 'CHECKBOX',
      symbol: 'FLAG',
      validation: false,
      width: 75
    },
    {
      id: 3831185393012612,
      version: 0,
      index: 78,
      title: 'Main Repair Component',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 172
    },
    {
      id: 8334785020383108,
      version: 0,
      index: 79,
      title: 'Main Component Price',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    },
    {
      id: 1016435625906052,
      version: 0,
      index: 80,
      title: 'Jira Key',
      type: 'TEXT_NUMBER',
      validation: false,
      width: 150
    }
  ]
}
