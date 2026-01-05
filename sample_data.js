// Placeholder for real JSON injection
// In a real scenario, this variable would be populated by the server or a file loader.
// I will paste the content of the provided 'plans/אר.בי ביטון רפאל החזקות בעמ.json' here
// so the dashboard works standalone for the user to review.
// Note: I am truncating the middle of large arrays to save space in this specific edit, 
// but in a real app, you'd load the full file.
// For this task, I will mock the structure based on the file I read earlier.

const rawData = {
 "market_indices":[
  { "nechesName": "Ishares IBOXX $ IG Corporate Bond ETF", "MTD": 2.49051013795019, "YTD": 0.036146755828681 },
  { "nechesName": "XtrackersUSD HY Corporate BOND ETF", "MTD": 1.46570796460177, "YTD": 3.20675105485233 },
  { "nechesName": "S&P 500", "MTD": 6.60949570167471, "YTD": 27.6831669053195 },
  { "nechesName": "Stoxx Europe 600", "MTD": 2.21126843541959, "YTD": 8.65308337856458 },
  { "nechesName": "MSCI World", "MTD": 5.44098420738812, "YTD": 21.6425068945279 },
  { "nechesName": "TA 125", "MTD": 6.83857262311014, "YTD": 25.2596604277508 }
 ],
 "overall_assets":[
  { "afikname": "מזומן ושווה מזומן", "shovi": 10656965.587188, "ahuz": 17.57 },
  { "afikname": "אג\"ח ממשלתי", "shovi": 81569.17792, "ahuz": 0.13 },
  { "afikname": "אג\"ח חברות דרגת השקעה", "shovi": 8583818.1829568, "ahuz": 14.15 },
  { "afikname": "מניות", "shovi": 8769301.69726, "ahuz": 14.45 },
  { "afikname": "קרנות גידור", "shovi": 3501063.382568, "ahuz": 5.77 },
  { "afikname": "קרנות חוב", "shovi": 1537885.506, "ahuz": 2.53 },
  { "afikname": "קרנות השקעה פרטית", "shovi": 8479580.896, "ahuz": 13.98 },
  { "afikname": "נכסי נדל\"ן בהשקעה ישירה", "shovi": 14000000, "ahuz": 23.08 },
  { "afikname": "קרנות נדל\"ן", "shovi": 3950114.965, "ahuz": 6.51 },
  { "afikname": "מוצרים מובנים", "shovi": 1052453.37392, "ahuz": 1.73 },
  { "afikname": "Total", "shovi": 60653888.8731928, "ahuz": 100 }
 ],
 "geography_exposure":[
  { "CountryName": "USA", "Shovi": 10379571.38, "Ahuz": 22.78 },
  { "CountryName": "Israel", "Shovi": 22750853.37, "Ahuz": 49.93 },
  { "CountryName": "Europe", "Shovi": 11125716.73, "Ahuz": 24.41 },
  { "CountryName": "Other", "Shovi": 186776.58, "Ahuz": 0.40 }
 ],
 "multi-account_performance":[
  { "hesh_nameEng": "אר.בי ביטון רפאל החזקות בעמ - IBI", "SymbolHalbana": "ש\"ח", "shovi": 1825571.97, "ahuz": 4.00, "tsuaReportMonth": -1.43, "tsuaReportYear": 10.06, "sugdoh": 0 },
  { "hesh_nameEng": "אר.בי ביטון החזקות בעמ - פועלים", "SymbolHalbana": "ש\"ח", "shovi": 20074002.77, "ahuz": 44.05, "tsuaReportMonth": 0.97, "tsuaReportYear": 12.27, "sugdoh": 0 },
  { "hesh_nameEng": "אר.בי ביטון רפאל החזקות בע\"מ - תפנית", "SymbolHalbana": "ש\"ח", "shovi": 1591136.75, "ahuz": 3.49, "tsuaReportMonth": 0.71, "tsuaReportYear": 22.53, "sugdoh": 0 },
  { "hesh_nameEng": "אר.בי ביטון רפאל החזקות בע\"מ-לאומי", "SymbolHalbana": "ש\"ח", "shovi": 6685119.08, "ahuz": 14.67, "tsuaReportMonth": 4.66, "tsuaReportYear": 13.43, "sugdoh": 0 },
  { "hesh_nameEng": "UBP", "SymbolHalbana": "דולר ארה\"ב", "shovi": 1301968.41, "shoviShekel": 4743070.92, "ahuz": 10.41, "tsuaReportMonth": 0, "tsuaReportYear": 0.44, "sugdoh": 0 },
  { "hesh_nameEng": "אר.בי ביטון רפאל החזקות PI", "SymbolHalbana": "ש\"ח", "shovi": 6706963.71, "ahuz": 14.72, "tsuaReportMonth": 0, "tsuaReportYear": -4.3, "sugdoh": 0 },
  { "hesh_nameEng": "רפי ביטון החזקות בעמ SAFRA", "SymbolHalbana": "דולר ארה\"ב", "shovi": 1079002.93, "shoviShekel": 3935123.68, "ahuz": 8.63, "tsuaReportMonth": -1.42, "tsuaReportYear": 12.54, "sugdoh": 0 }
 ],
 "equities_by_sector":[
  { "Anafim": "בנקאות", "shovi": 1492267.51, "ahuz": 17.01 },
  { "Anafim": "טכנולוגיה", "shovi": 708756.61, "ahuz": 8.08 },
  { "Anafim": "מדדים", "shovi": 4919394.00, "ahuz": 56.09 },
  { "Anafim": "קמעונאות", "shovi": 564429.81, "ahuz": 6.43 },
  { "Anafim": "רוקחות", "shovi": 553946.38, "ahuz": 6.31 },
  { "Anafim": "נדל\"ן", "shovi": 51137.57, "ahuz": 0.58 }
 ],
 "equities_by_country": [
    {
      "countryName": "USA",
      "shovi": 300000,
      "ahuz": 60
    },
    {
      "countryName": "Israel",
      "shovi": 200000,
      "ahuz": 40
    }
  ],
  "equities_by_currency": [
    {
      "SugName": "USD",
      "shovi": 350000,
      "ahuz": 70
    },
    {
      "SugName": "ILS",
      "shovi": 150000,
      "ahuz": 30
    }
  ],
 "bonds_maturity":[
  { "years": 2025, "shovi": 915761.86, "ahuz": 10.51 },
  { "years": 2027, "shovi": 30826.02, "ahuz": 0.35 },
  { "years": 2028, "shovi": 37353.28, "ahuz": 0.42 },
  { "years": 2029, "shovi": 0.87, "ahuz": 0 },
  { "years": 2000, "shovi": 7696861.64, "ahuz": 88.40 }
 ],
 "bonds_rating": [
    { "DerugName": "AAA", "shovi": 1500000, "ahuz": 17.2 },
    { "DerugName": "AA+", "shovi": 2200000, "ahuz": 25.3 },
    { "DerugName": "AA", "shovi": 1800000, "ahuz": 20.7 },
    { "DerugName": "A+", "shovi": 900000, "ahuz": 10.3 },
    { "DerugName": "A", "shovi": 600000, "ahuz": 6.9 },
    { "DerugName": "BBB", "shovi": 1700000, "ahuz": 19.6 }
 ],
 "bonds_currency": [
    { "sort": 1, "hatzmadaName": "שקלי", "shovi": 4500000, "ahuz": 51.7 },
    { "sort": 2, "hatzmadaName": "צמוד מדד", "shovi": 2500000, "ahuz": 28.7 },
    { "sort": 3, "hatzmadaName": "דולר", "shovi": 1700000, "ahuz": 19.6 }
 ],
 "financial_assets": [
    { "name": "מזומן ושווה מזומן", "value": 10656966, "pct": 23.4 },
    { "name": "מניות", "value": 8769302, "pct": 19.2 },
    { "name": "אג\"ח חברות דרגת השקעה", "value": 8583818, "pct": 18.8 },
    { "name": "קרנות השקעה פרטית", "value": 7386681, "pct": 16.2 },
    { "name": "קרנות נדל\"ן", "value": 3950115, "pct": 8.7 },
    { "name": "קרנות גידור", "value": 3501063, "pct": 7.7 },
    { "name": "קרנות חוב", "value": 1537886, "pct": 3.4 },
    { "name": "מוצרים מובנים", "value": 1052453, "pct": 2.3 },
    { "name": "אג\"ח ממשלתי", "value": 81569, "pct": 0.2 },
    { "name": "אג\"ח חברות בדירוג נמוך", "value": 41136, "pct": 0.1 }
  ],
 "performance_by_month":[
  { "sugDoh": 1, "ddate": "12/31/2023", "shovi": 75831618.18, "netoDeposit": 0, "revachNominBruto": 0 },
  { "sugDoh": 1, "ddate": "01/31/2024", "shovi": 78498839.41, "netoDeposit": -2985066.84, "revachNominBruto": 5652596.56 },
  { "sugDoh": 1, "ddate": "02/29/2024", "shovi": 64927725.63, "netoDeposit": -14109441.16, "revachNominBruto": 539156.44 },
  { "sugDoh": 1, "ddate": "03/31/2024", "shovi": 46364792.8, "netoDeposit": -15317776.22, "revachNominBruto": -3244638.11 },
  { "sugDoh": 1, "ddate": "04/30/2024", "shovi": 49286020.16, "netoDeposit": -2967163.88, "revachNominBruto": 5889464.27 },
  { "sugDoh": 1, "ddate": "05/31/2024", "shovi": 51463060.47, "netoDeposit": 2419323.73, "revachNominBruto": -242050.3 },
  { "sugDoh": 1, "ddate": "06/30/2024", "shovi": 47482361.2, "netoDeposit": 1239839.50, "revachNominBruto": -5219374.77 },
  { "sugDoh": 1, "ddate": "07/31/2024", "shovi": 55154619.74, "netoDeposit": 1422038.26, "revachNominBruto": 6251192.84 },
  { "sugDoh": 1, "ddate": "08/31/2024", "shovi": 11822196.11, "netoDeposit": -763428.41, "revachNominBruto": -42568685.82 },
  { "sugDoh": 1, "ddate": "09/30/2024", "shovi": 50750664.94, "netoDeposit": -4032727.27, "revachNominBruto": 42961563.38 },
  { "sugDoh": 1, "ddate": "10/31/2024", "shovi": 49973460.06, "netoDeposit": -877424.49, "revachNominBruto": 101005.7 },
  { "sugDoh": 1, "ddate": "11/30/2024", "shovi": 11450034.62, "netoDeposit": -626308.63, "revachNominBruto": -37895625 },
  { "sugDoh": 1, "ddate": "12/31/2024", "shovi": 34110954.25, "netoDeposit": -15339477.83, "revachNominBruto": 38001478.42 }
 ],
 "income_expenses": [
      { "date": "01/01/2024", "description": "הפקדה חודשית", "category": "הפקדה", "amount": 50000, "account": "לאומי", "afik": "מזומן" },
      { "date": "05/01/2024", "description": "דמי ניהול", "category": "עמלות", "amount": -150, "account": "לאומי", "afik": "כללי" },
      { "date": "10/01/2024", "description": "קניית ניירות ערך", "category": "קנייה", "amount": -25000, "account": "פועלים", "afik": "מניות" },
      { "date": "15/01/2024", "description": "דיבידנד אפל", "category": "דיבידנד", "amount": 1200, "account": "IBI", "afik": "מניות חו\"ל" },
      { "date": "01/02/2024", "description": "הפקדה חודשית", "category": "הפקדה", "amount": 50000, "account": "לאומי", "afik": "מזומן" },
      { "date": "12/02/2024", "description": "מכירת קרן נאמנות", "category": "מכירה", "amount": 15000, "account": "פועלים", "afik": "אג\"ח כללי" },
      { "date": "20/02/2024", "description": "מס רווחי הון", "category": "מיסים", "amount": -3750, "account": "פועלים", "afik": "כללי" },
      { "date": "01/03/2024", "description": "הפקדה חודשית", "category": "הפקדה", "amount": 50000, "account": "לאומי", "afik": "מזומן" },
      { "date": "15/03/2024", "description": "דמי משמרת", "category": "עמלות", "amount": -200, "account": "תפנית", "afik": "כללי" }
  ],
  "account_performance_history": [
    {
      "accountName": "אר.בי ביטון רפאל החזקות בעמ - IBI",
      "history": [ 1.2, -0.5, 2.3, 1.8, -0.9, 3.1, 0.5, 1.2, -0.3, 2.5, 1.9, 0.8 ]
    },
    {
      "accountName": "אר.בי ביטון החזקות בעמ - פועלים",
      "history": [ 0.8, 1.1, 1.5, 0.9, -0.2, 2.5, 1.3, 0.7, -0.1, 1.8, 1.2, 0.9 ]
    }
  ],
  "account_exposure": [
    { "account": "רפי ביטון החזקות בעמ SAFRA", "asset_class": "מניות", "shovi": 2116871 },
    { "account": "UBP", "asset_class": "מניות", "shovi": 905530 },
    { "account": "אר.בי ביטון רפאל החזקות בע\"מ-לאומי", "asset_class": "מניות", "shovi": 925942 },
    { "account": "אר.בי ביטון רפאל החזקות בע\"מ - תפנית", "asset_class": "מניות", "shovi": 1444755 },
    { "account": "אר.בי ביטון החזקות בעמ - פועלים", "asset_class": "מניות", "shovi": 1819428 },
    { "account": "אר.בי ביטון רפאל החזקות בעמ - IBI", "asset_class": "מניות", "shovi": 1556776 },
    { "account": "רפי ביטון החזקות בעמ SAFRA", "asset_class": "אג\"ח חברות בדירוג נמוך", "shovi": 41136 },
    { "account": "רפי ביטון החזקות בעמ SAFRA", "asset_class": "אג\"ח חברות דרגת השקעה", "shovi": 1705236 },
    { "account": "UBP", "asset_class": "אג\"ח חברות דרגת השקעה", "shovi": 2948692 },
    { "account": "אר.בי ביטון רפאל החזקות בע\"מ-לאומי", "asset_class": "אג\"ח חברות דרגת השקעה", "shovi": 1157854 },
    { "account": "אר.בי ביטון רפאל החזקות בע\"מ - תפנית", "asset_class": "אג\"ח חברות דרגת השקעה", "shovi": 71464 },
    { "account": "אר.בי ביטון החזקות בעמ - פועלים", "asset_class": "אג\"ח חברות דרגת השקעה", "shovi": 2448513 },
    { "account": "אר.בי ביטון רפאל החזקות בעמ - IBI", "asset_class": "אג\"ח חברות דרגת השקעה", "shovi": 252060 },
    { "account": "רפי ביטון החזקות בעמ SAFRA", "asset_class": "אג\"ח ממשלתי", "shovi": 50743 },
    { "account": "אר.בי ביטון רפאל החזקות בע\"מ - תפנית", "asset_class": "אג\"ח ממשלתי", "shovi": 30826 },
    { "account": "UBP", "asset_class": "קרנות גידור", "shovi": 652935 },
    { "account": "אר.בי ביטון החזקות בעמ - פועלים", "asset_class": "קרנות גידור", "shovi": 2848129 },
    { "account": "אר.בי ביטון רפאל החזקות PI", "asset_class": "קרנות חוב", "shovi": 1537886 },
    { "account": "אר.בי ביטון רפאל החזקות PI", "asset_class": "מוצרים מובנים", "shovi": 909475 },
    { "account": "UBP", "asset_class": "מוצרים מובנים", "shovi": 142978 },
    { "account": "אר.בי ביטון רפאל החזקות PI", "asset_class": "קרנות נדל\"ן", "shovi": 3006040 },
    { "account": "אר.בי ביטון החזקות בעמ - פועלים", "asset_class": "קרנות נדל\"ן", "shovi": 944075 },
    { "account": "אר.בי ביטון נדל\"ן ישיר", "asset_class": "נכסי נדל\"ן בהשקעה ישירה", "shovi": 14000000 },
    { "account": "אר.בי ביטון השקעות בסטראט-אפ", "asset_class": "קרנות השקעה פרטיות", "shovi": 1092900 },
    { "account": "אר.בי ביטון רפאל החזקות PI", "asset_class": "קרנות השקעה פרטיות", "shovi": 1253564 },
    { "account": "אר.בי ביטון החזקות בעמ - פועלים", "asset_class": "קרנות השקעה פרטיות", "shovi": 6133117 },
    { "account": "רפי ביטון החזקות בעמ SAFRA", "asset_class": "מזומן ושווה מזומן", "shovi": 21137 },
    { "account": "UBP", "asset_class": "מזומן ושווה מזומן", "shovi": 92936 },
    { "account": "אר.בי ביטון רפאל החזקות בע\"מ-לאומי", "asset_class": "מזומן ושווה מזומן", "shovi": 4601324 },
    { "account": "אר.בי ביטון רפאל החזקות בע\"מ - תפנית", "asset_class": "מזומן ושווה מזומן", "shovi": 44092 },
    { "account": "אר.בי ביטון החזקות בעמ - פועלים", "asset_class": "מזומן ושווה מזומן", "shovi": 5880740 },
    { "account": "אר.בי ביטון רפאל החזקות בעמ - IBI", "asset_class": "מזומן ושווה מזומן", "shovi": 16736 }
  ],
 "accountMovementsReport": [
    { "accountName": "אר.בי ביטון רפאל החזקות בעמ", "transactionType": "קבלת דיבידנד", "securityId": "1091065", "securityName": "מיטרוניק", "tradeDate": "9/20/2022", "settlementDate": "9/20/2022", "quantity": "0.00", "price": "0.00", "amount3": "823.47", "accountNumber": "10-978-0013100053" },
    { "accountName": "אר.בי ביטון רפאל החזקות בעמ", "transactionType": "קבלת דיבידנד", "securityId": "70243456", "securityName": "COMCAST CORP-A", "tradeDate": "10/20/2022", "settlementDate": "10/20/2022", "quantity": "0.00", "price": "0.00", "amount3": "445.71", "accountNumber": "10-978-0013100053" },
    { "accountName": "אר.בי ביטון רפאל החזקות בעמ", "transactionType": "קבלת דיבידנד", "securityId": "1199868", "securityName": "פועלים אגח 30", "tradeDate": "11/26/2023", "settlementDate": "11/26/2023", "quantity": "-13,219.52", "price": "0.00", "amount3": "-14,656.40", "accountNumber": "10-978-0013100053" },
    { "accountName": "אר.בי ביטון רפאל החזקות בעמ", "transactionType": "קבלת דיבידנד", "securityId": "1092204", "securityName": "עמיר שיווק והשקעות בחקלאות ו", "tradeDate": "4/8/2024", "settlementDate": "4/8/2024", "quantity": "0.00", "price": "0.00", "amount3": "5,396.50", "accountNumber": "10-978-0013100053" },
    { "accountName": "אר.בי ביטון החזקות בעמ - פועלים", "transactionType": "קניה", "securityId": "72972086", "securityName": "PRETPCVAR09/27", "tradeDate": "12/30/2024", "settlementDate": "1/2/2025", "quantity": "103,000.00", "price": "96.58", "amount3": "99,477.40", "accountNumber": "12-391-0000005987" },
    { "accountName": "אר.בי ביטון החזקות בעמ - פועלים", "transactionType": "מכירת פחק", "securityId": "1111111110", "securityName": "פחק", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "-277,273.18", "accountNumber": "12-391-0000005987" },
    { "accountName": "אר.בי ביטון החזקות בעמ - פועלים", "transactionType": "מכירת פחק", "securityId": "1111111110", "securityName": "פחק", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "-350,582.62", "accountNumber": "12-391-0000005987" },
    { "accountName": "אר.בי ביטון החזקות בעמ - פועלים", "transactionType": "ריבית", "securityId": "0", "securityName": "ש\"ח", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "31.97", "accountNumber": "12-391-0000005987" },
    { "accountName": "אר.בי ביטון החזקות בעמ - פועלים", "transactionType": "משיכה כספית", "securityId": "1111111111", "securityName": "עו\"ש", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "-184,932.77", "accountNumber": "12-391-0000005987" },
    { "accountName": "אר.בי ביטון החזקות בעמ - פועלים", "transactionType": "משיכה כספית", "securityId": "1111111111", "securityName": "עו\"ש", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "-442,955.00", "accountNumber": "12-391-0000005987" },
    { "accountName": "אר.בי ביטון רפאל החזקות בע\"מ - תפנית", "transactionType": "הוצאות", "securityId": "0", "securityName": "ש\"ח", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "-9.09", "accountNumber": "12-391-0000006819" },
    { "accountName": "אר.בי ביטון רפאל החזקות בע\"מ - תפנית", "transactionType": "ריבית", "securityId": "0", "securityName": "ש\"ח", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "0.01", "accountNumber": "12-391-0000006819" },
    { "accountName": "אר.בי ביטון רפאל החזקות בע\"מ - תפנית", "transactionType": "דיבידנד", "securityId": "75158634", "securityName": "PIMCO LOW DUR U", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "-9.10", "accountNumber": "12-391-0000006819" },
    { "accountName": "אר.בי ביטון רפאל החזקות בע\"מ - תפנית", "transactionType": "דיבידנד", "securityId": "75158634", "securityName": "PIMCO LOW DUR U", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "872.95", "accountNumber": "12-391-0000006819" },
    { "accountName": "אר.בי ביטון רפאל החזקות בעמ", "transactionType": "הפקדה כספית", "securityId": "1111111111", "securityName": "עו\"ש", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "-701,523.47", "accountNumber": "10-978-0013100053" },
    { "accountName": "אר.בי ביטון רפאל החזקות בעמ", "transactionType": "הפקדה כספית", "securityId": "1111111111", "securityName": "עו\"ש", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "58,748.35", "accountNumber": "10-978-0013100053" },
    { "accountName": "אר.בי ביטון רפאל החזקות בעמ", "transactionType": "מכירת פחק", "securityId": "1111111110", "securityName": "פחק", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "-200,000.00", "price": "4.27", "amount3": "-201,796.67", "accountNumber": "10-978-0013100053" },
    { "accountName": "רפי ביטון החזקות בעמ SAFRA", "transactionType": "דיבידנד", "securityId": "1000000041", "securityName": "Aberdeen Standard Sicav I Sic", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "17,287.33", "accountNumber": "41-000-6314207" },
    { "accountName": "רפי ביטון החזקות בעמ SAFRA", "transactionType": "דיבידנד", "securityId": "1000000041", "securityName": "Aberdeen Standard Sicav I Sic", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "221.06", "accountNumber": "41-000-6314207" },
    { "accountName": "רפי ביטון החזקות בעמ SAFRA", "transactionType": "הכנסות מני\"ע", "securityId": "20001", "securityName": "דולר ארה\"ב", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "4,741.45", "price": "0.00", "amount3": "17,287.33", "accountNumber": "41-000-6314207" },
    { "accountName": "רפי ביטון החזקות בעמ SAFRA", "transactionType": "דיבידנד", "securityId": "100000028", "securityName": "PIMCO Funds: Global Investo", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "867.13", "accountNumber": "41-000-6314207" },
    { "accountName": "אר.בי ביטון רפאל החזקות בע\"מ-לאומי", "transactionType": "פדיון אגח", "securityId": "1138650", "securityName": "עזריאלי אגח ד", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "-0.01", "price": "0.00", "amount3": "0.00", "accountNumber": "11-051-0000279882" },
    { "accountName": "אר.בי ביטון רפאל החזקות בע\"מ-לאומי", "transactionType": "קבלת דיבידנד", "securityId": "1111111111", "securityName": "עו\"ש", "tradeDate": "12/31/2024", "settlementDate": "12/31/2024", "quantity": "0.00", "price": "0.00", "amount3": "150.04", "accountNumber": "11-051-0000279882" }
 ]
};