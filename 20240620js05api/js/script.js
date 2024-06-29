$("#btn").on("click", function () {
    const targetArtistName = $("#keyword").val();
    //const requestUrl = `https://itunes.apple.com/search?lang=ja_JP&entry=music&media=music&country=JP&limit=50&term=${targetArtistName}`;

    const requestUrl = `https://www.googleapis.com/books/v1/volumes?q=${targetArtistName}`;

    $.getJSON(requestUrl, function (data) {
        console.log(data);
        console.log(data['items'][0]['volumeInfo']['title']);
        //console.log(data['results'][0]["previewUrl"])

        // $("#audio").attr('src',data['results'][0]["previewUrl"]);
        // $("#audio")[0].play();

        //jQueryを使うxVideoタグorAudioタグの場合に[0]が必要


        //画面に1曲分の情報表示
        data.items.forEach(function (books, index) {



            const img = books.volumeInfo.imageLinks.smallThumbnail;//画像
            const title = books.volumeInfo.title;//タイトル
            const publishedDate = books.volumeInfo.publishedDate;//アーティスト
            const description = books.volumeInfo.description;//画像

            //const title = data.items[0].volumeInfo.title;
            //const artistName = data.results[0].artistName;
            //const artworkUrl = data.results[0].artworkUrl100;

            

            $("#result").append(`<img src="${img}"/>${index}${title}${publishedDate}${description}`);


        });


    });
});
