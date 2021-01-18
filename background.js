
function handleImage(){
    console.log("finished loading");
}

function getPhoto(){
    const api_key = "563492ad6f91700001000001b328e07c43694cc1a0483e1333d8106f"
    const condition = "dark landscape"
    const number = (Math.floor((Math.random() * 29) + 1));
    const body = document.querySelector("body");

    $.ajax({
        method: "GET",
        beforeSend: function(xhr){
            xhr.setRequestHeader("Authorization", api_key)
        },
        url: `https://api.pexels.com/v1/search?query=${condition}&per_page=30&page=1`,                
        dataType: 'json'

    }).then((result) => {

        const image = new Image();
        image.src = `${result.photos[number].src.landscape}`;
        image.classList.add("backgroundImg");
        body.appendChild(image);

    });
}

function init(){
    getPhoto();
}

init();

