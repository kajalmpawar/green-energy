function imgloader() {
const imgP = [
           "./img/solar.jpg",
           "./img/wind.jpg",
           "./img/hydro.jpg"
        ];
const images = [];
    for (let i = 0; i < imgP.length; i++) {
        images[i] = new Image();
        images[i].src = imgP[i];
    }

    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
};
window.addEventListener("load", imgloader);

let btns = document.querySelectorAll('button');

let data = [
    {
        heading: "Community Solar",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus mollis metus. Proin aliquam tortor libero, ac pharetra elit interdum vitae. Phasellus condimentum sollicitudin dui, at mollis tellus accumsan id. Nam ac fringilla felis. Nam viverra metus in velit tempus tempor. In dui nunc, posuere quis malesuada non, consectetur nec urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus mollis metus. Proin aliquam tortor libero, ac pharetra elit interdum vitae. Phasellus condimentum sollicitudin dui, at mollis tellus accumsan id. Nam ac fringilla felis. Nam viverra metus in velit tempus tempor. In dui nunc, posuere quis malesuada non, consectetur nec urna.",
        imgUrl: "./img/solar.jpg"
    },
    {
        heading: "Wind Farming",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus mollis metus. Proin aliquam tortor libero, ac pharetra elit interdum vitae. Phasellus condimentum sollicitudin dui, at mollis tellus accumsan id. Nam ac fringilla felis. Nam viverra metus in velit tempus tempor. In dui nunc, posuere quis malesuada non, consectetur nec urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus mollis metus. Proin aliquam tortor libero, ac pharetra elit interdum vitae. Phasellus condimentum sollicitudin dui, at mollis tellus accumsan id. Nam ac fringilla felis. Nam viverra metus in velit tempus tempor. In dui nunc, posuere quis malesuada non, consectetur nec urna.",
        imgUrl: "./img/wind.jpg"
    },
    {
        heading: "Hydro Power Plants",
        bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus mollis metus. Proin aliquam tortor libero, ac pharetra elit interdum vitae. Phasellus condimentum sollicitudin dui, at mollis tellus accumsan id. Nam ac fringilla felis. Nam viverra metus in velit tempus tempor. In dui nunc, posuere quis malesuada non, consectetur nec urna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus finibus mollis metus. Proin aliquam tortor libero, ac pharetra elit interdum vitae. Phasellus condimentum sollicitudin dui, at mollis tellus accumsan id. Nam ac fringilla felis. Nam viverra metus in velit tempus tempor. In dui nunc, posuere quis malesuada non, consectetur nec urna.",
        imgUrl: "./img/hydro.jpg"
    }
];

let $content = document.querySelector(".content");

$content.innerHTML = `<div class="heading">
                        <h3>${data[0].heading}</h3>
                      </div>
                      <div class="ge_images">
                        <img src="${data[0].imgUrl}">
                      </div>
                      <div class="text">
                        <p>${data[0].bodyText}</p>
                      </div>`;


function handleBtn(ev) {

    for (let i = 0; i < btns.length; i++) {
        if (btns[i].hasAttribute("id")) {
            btns[i].removeAttribute("id");
            console.log(btns[i]);
        }
    }

    let currentItem = ev.currentTarget;
    currentItem.setAttribute("id", "active");
}

for (let btn of btns) {
    btn.addEventListener("click", handleBtn);
}

function contentHandler(ev) {

    let clickBtn = ev.currentTarget;
    let btnText = clickBtn.dataset.btn;

    if (btnText === "Solar") {
        $content.innerHTML = `<div class="heading">
                                <h3>${data[0].heading}</h3>
                            </div>
                             <img src="${data[0].imgUrl}">
                              <p>${data[0].bodyText}</p>`;
    } else if (btnText === "Wind") {
        $content.innerHTML = `<div class="heading">
                                <h3>${data[1].heading}</h3>
                            </div>
                                <img src="${data[1].imgUrl}">
                                <p>${data[1].bodyText}</p>`;
    } else {
        $content.innerHTML = `<div class="heading">
                                <h3>${data[2].heading}</h3>
                              </div>
                                <img src="${data[2].imgUrl}">
                                <p>${data[2].bodyText}</p>`;
    }
}

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", contentHandler);
}