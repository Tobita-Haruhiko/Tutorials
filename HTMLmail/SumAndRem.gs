function myFunction() {
  //データの取得
  const myEmail = Session.getActiveUser().getEmail();
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const DataList = spreadsheet.getSheetByName('DataList');
  const DataRange = DataList.getDataRange();
  const DataValues = DataRange.getValues();

//アイコンの呼び出し
  const icon1Id = '1P1eLydSwBCxxpNE4_IG65qQqUMKzsYjH';
  const icon1File = DriveApp.getFileById(icon1Id);
  var icon1Blob = icon1File.getBlob();

  const icon2Id ='1sQlmHXLzLoL9Qoewxqb2_v07hVrzJS4Q';
  const icon2File = DriveApp.getFileById(icon2Id);
  var icon2Blob = icon2File.getBlob();

//メールが処理済かの判定
  for (var i = 1; i < DataValues.length; i++) {
    const row = DataValues[i];
    const isTarget = null == row[0] ? false : "y" === row[0].toString().toLowerCase();
    const isProessed = null == row[1] ? false : "y" === row[1].toString().toLowerCase();

    if (isTarget && !isProessed) {
      //スプレッドシートからデータの取得
      const email = row[2];
      const DatasSoFar = row[3];
      const DatasPrevMonth = row[4];

      //従業員のテーブルのデータの取得
      const TableName = row[5];
      const Table = spreadsheet.getSheetByName(`${TableName}`);
      const TableRange = Table.getDataRange();
      const TableValues = TableRange.getValues();

      //残りのデータ数を表示
      var TableDataRemain = "";
      if (TableValues.length - 4 > 0) {
        TableDataRemain = `他` + (TableValues.length - 4) + `件`;
      }

      //従業員のテーブルの行数
      var TableRows = TableValues.length - 1;
      if (TableValues.length >= 5) {
        TableRows = 3;
      }

      //従業員のテーブルのhtmlコード
      var TableCode = ''
      
      if (TableValues.length >= 2) {
        TableCode += 
        `<table class="employeeList">
        <tr class="employeeList">
          <th class="Listindex">従業員番号</th>
          <th class="Listindex">名前</th>
        </tr>`

        for (var j = 1; j <= TableRows; j++) {
        TableCode += `
        <tr class="employeeList">
          <td class="num">${TableValues[j][0]}</td>
          <td class="name">${TableValues[j][1]}</td>
        </tr>`
      }
        TableCode += `</table>` ; 
      }
    
    //htmlの本文
      const title = "5月のHRPentest活動記録";
      const body = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <base target=”_top”>
        <style>
* {
    box-sizing: border-box;
    text-align: center;
    font-family: Noto Sans JP;
    color: #3C4956;
}

div.outsideBorder {
    background-color: #FFFFFF;
    width: 916px;
    height: auto;
    border-radius: 16px;

    border: 2px solid #D9DCE0;
}

div.component {
    width: 600px;
    margin: 64px auto 40px auto;
}

div.title {
    width: 600px;
    padding: 0px 0px 40px 0px;

    margin-bottom: 40px;
    border-bottom: 1px solid #DDDDDD;
}

img.logo {
  width: 200px;
  height: 48px;
  margin-bottom: 8px;
}

h1 {
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0.04em;
    margin: 0px;
}

div.datas {
    width: 600px;
    height: 418px;
    padding: 0px 0px 40px 0px;
    gap: 24px;
    border: 0px 0px 1px 0px;
    opacity: 0px;

    margin-bottom: 40px;
    border-bottom: 1px solid #DDDDDD;
}

h2{
    font-size: 26px;
    font-weight: 400;
    line-height: 39px;
    letter-spacing: 0.04em;

    margin-bottom: 24px;

    color: #666666;

}

table.dataLayout {
    border: none;
    margin-bottom: 24px;
}

.dataHistory {
    width: 600px;
    height: auto;
}

img.icon {
  width: 64px;
  height: 64px;
  margin-bottom: 4px;
}

.dataPrev, .dataMonth {
    width: 300px;
    height: 204px;
}

p.dataDescription {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.04em;
    margin: 0px;
    margin-bottom: 4px;
}

p.dataNumber{
    font-size: 56px;
    font-weight: 700;
    line-height: 84px;
    letter-spacing: 0.04em;

    margin: 0px;
}

input {
    font-size: 16px;
    height: 48px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    border: none;
    background: #FFBE04;
}

input:hover {
    background: #FFBE04;
}

input.data {
    width: 198px;
    padding: 12px 16px 12px 16px;
    gap: 10px;
    border-radius: 8px;
    opacity: 0px;
    margin-bottom: 40px;
}

div.interview {
    width: 600px;
}

div.interviewContent {
    width: 600px;
    gap: 24px;
    opacity: 0px;

    border: none;
}

table.employeeList {
    width: 600px;
    gap: 0px;
    border-radius: 4px;
    opacity: 0px;
    border: 1px solid #DDDDDD;
    border-collapse: collapse;
    margin-bottom: 24px;
}

th.Listindex {
    height: 44px;
    background-color: #EFEFEF;
    text-align: left;
    padding: 0px 16px;
}

tr.employeeList {
    height: 44px;
    border-top: 1px solid #DDDDDD;
}
          
td.num, td.name {
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    letter-spacing: 0.04em;
    text-align: left;
    padding: 0px 16px;
          
    border-top: 1px solid #DDDDDD;
}

td.num {
    width: 115px;
}

td.name {
    width: 485px;
    color: #00ACC1;
    text-decoration: underline;
}

div.bottom {
    width: 600px;
    height: 80px;
    gap: 8px;
    opacity: 0px;
}

input.interview {
    width: 215px;
    padding: 12px 16px 12px 16px;
    gap: 10px;
    border-radius: 8px;
    opacity: 0px;
    margin-top: 8px;
}
</style>
</head>
<body>
<div class="outsideBorder">
<div class="component">
    <div class="title">
      <img src="https://ameand.co.jp/wp-content/themes/cocoon-master-child/img/hrpentest.png" class="logo" alt="hrpe" />
      <h1>5月の活動記録</h1>
    </div>
    
    <div class="datas">
        <h2>お手元に未登録のデータが無いか<br>毎月確認しましょう</h2>
        <table class="dataLayout">
            <tr class="dataHistory">
                <td class="dataPrev">
                    <img src="cid:icon1" class="icon" />
                    <p class="dataDescription">これまでの<br>アップロード音声データ数</p> 
                    <p class="dataNumber">${DatasSoFar}</p>
                </td>
    
                <td class="dataMonth">
                    <img src="cid:icon2" class="icon" />
                    <p class="dataDescription">先月の<br>アップロード音声データ数</p>
                    <p class="dataNumber">${DatasPrevMonth}</p>
                </td>
            </tr>
        </table>
        <input class="data" type="button" value="音声データを登録する">
    </div>
    
    <div class="interview">
        <h2>インタビュー(面談)記録を振り返って改善に繋げましょう</h2>
        <div class="interviewContent">
                ${TableCode}
            <div class="bottom">
                <p>${TableDataRemain}</p>
                <input class="interview" type="button" value="インタビュー一覧を見る">  
            </div>
        </div>
    </div>     
</div>
</div>
</body>
</html>
      `;

      //メールの送信処理
      const options = { cc: myEmail, htmlBody: body, inlineImages: {icon1: icon1Blob, icon2: icon2Blob }};
      Logger.log(`(${email}) にメールを送信します。`);
      GmailApp.sendEmail(email, title, body, options);

      //メールが送信されたことをspreadsheetに記録
      const isProcessedCell = DataRange.getCell(i+1, 2);
      isProcessedCell.setValue("y");
        
    } else {
      //メールが送信されない時の処理
      Logger.log(`${row[2]} は処理されませんでした。`);
    }
  }
}