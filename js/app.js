
// $(function () {
//   $("#searchBtn").on("click", function () {
//     const word = $("#wordInput").val().trim();
//     if (!word) return alert("単語を入力してください");

//     $.ajax({
//       method: "GET",
//       url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
//       headers: {
//         "x-rapidapi-key": "3BEF0729a9msh33ABB1260BAE556p1bbf0ajsn5714A915ee76",
//         "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
//       }
//     })
//     .done(function (data) {
//       $("#result").text(JSON.stringify(data, null, 2));
//     })
//     .fail(function (err) {
//       $("#result").text("エラーが発生しました\n" + JSON.stringify(err, null, 2));
//     });
//   });
// });

// $(function () {
//   $("#searchBtn").on("click", function () {
//     const word = $("#wordInput").val().trim();
//     if (!word) return alert("単語を入力してください");

//     // 前回の結果をクリア
//     $("#resultsList").empty();

//     $.ajax({
//       method: "GET",
//       url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
//       headers: {
//         "x-rapidapi-key": "3BEF0729a9msh33ABB1260BAE556p1bbf0ajsn5714A915ee76",
//         "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
//       }
//     })
//     .done(function (data) {

//       // meanings（results）をループ
//       if (data.results && data.results.length > 0) {
//         data.results.forEach(function (item) {

//           // definition がある場合
//           if (item.definition) {
//             $("#resultsList").append(`
//               <li class="definition-item">
//                 <strong>Definition:</strong> ${item.definition}
//               </li>
//             `);
//           }

//           // synonyms がある場合（配列）
//           if (item.synonyms && item.synonyms.length > 0) {
//             item.synonyms.forEach(function (syn) {
//               $("#resultsList").append(`
//                 <li class="synonym-item">
//                   <strong>Synonym:</strong> ${syn}
//                 </li>
//               `);
//             });
//           }

//         });
//       } else {
//         $("#resultsList").append("<li>結果がありません</li>");
//       }

//     })
//     .fail(function (err) {
//       $("#resultsList").append("<li>エラーが発生しました</li>");
//       console.log(err);
//     });
//   });
// });

$(function () {
  $("#searchBtn").on("click", function () {
    const word = $("#wordInput").val().trim();
    if (!word) return alert("単語を入力してください");

    $("#resultsList").empty();

    $.ajax({
      method: "GET",
      url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
      headers: {
        "x-rapidapi-key": "mykey",
        "x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
      }
    })
    .done(function (data) {

      if (data.results && data.results.length > 0) {

        data.results.forEach(function (item) {

          // definition
          let html = `
            <li class="definition-block">
              <strong>Definition:</strong> ${item.definition}
          `;

          // synonyms（配列をまとめて1回だけ表示）
          if (item.synonyms && item.synonyms.length > 0) {
            const synList = item.synonyms.join(", ");
            html += `
              <br><strong>Synonyms:</strong> ${synList}
            `;
          }

          html += `</li>`;

          $("#resultsList").append(html);
        });

      } else {
        $("#resultsList").append("<li>結果がありません</li>");
      }

    })
    .fail(function (err) {
      $("#resultsList").append("<li>エラーが発生しました</li>");
      console.log(err);
    });
  });
});
