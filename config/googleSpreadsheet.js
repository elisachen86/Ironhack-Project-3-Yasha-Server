const { GoogleSpreadsheet } = require("google-spreadsheet");

/*
 * @param  {number} spreadSheetID
 * @return  {object} return the doc back
 */

async function getSpreadsheet(spreadSheetID) {
  if (!spreadSheetID) spreadSheetID = process.env.GOOGLE_SS_ID;
  const doc = new GoogleSpreadsheet(spreadSheetID);

  try {
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    });
    await doc.loadInfo(); // loads document properties and worksheets
    console.log(`${doc.title} google spreadsheet is connected !`);
    return doc;
  } catch (error) {
    console.log("Your spreadsheet is not connected");
    console.error(error);
    return null;
  }
}

async function getParams(spreadsheetId) {
  const doc = await getSpreadsheet(spreadsheetId);
  //   let adress = notationByArrToA1Notation(adressCell);
  // await doc.loadInfo(); // loads sheets
  const sheet1 = doc.sheetsByIndex[1]; // the first sheet
  const rowsSheet1 = await sheet1.getRows();
  const sheet2 = doc.sheetsByIndex[2]; // the second sheet
  const rowsSheet2 = await sheet2.getRows();

  const order = {
    name: rowsSheet1[0].name,
    number: rowsSheet1[0].number,
    date: new Date(rowsSheet1[0].date),
    season: rowsSheet1[0].season,
    category: rowsSheet1[0].category,
    paymentTerms: {
      firstPaymentAmount: rowsSheet1[0].firstPaymentAmount,
      secondPaymentAmount: rowsSheet1[0].secondPaymentAmount,
      firstPaymentDate: new Date(rowsSheet1[0].firstPaymentDate),
      secondPaymentDate: new Date(rowsSheet1[0].secondPaymentDate),
    },
    brandCompany: rowsSheet1[0].brandCompany,
    items: [],
  };
  for (let i = 0; i < rowsSheet2.length; i++) {
    order.items.push({
      itemName: rowsSheet2[i].itemName,
      price: rowsSheet2[i].price,
      quantity: rowsSheet2[i].quantity,
    });
  }
  //   console.log("this is the order:", order);
  return order;
}

// getParams();

const order = getParams;

// console.log(order);

module.exports = order;
