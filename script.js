const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
const country = "ca";
const options = ["General",
"Entertainment",
"Health",
"Science",
"Sports",
"Technology",
];

//Requests per day
let requestURL;

//Create cards from data source
const generateUI = (articles) => {
    for (let item of articles) {
        let card = document.createElement("div");
        card.classList.add("news-card");
        card.innerHTML = `
        <div class ="news-image-container">
        <img src="${items.urlToImage || "./newspaper.jpg"} "alt=""/></div>`
    }
    <div class = "news-content">
        <div class = "news-title">
            ${item.title}
        </div>
    </div>
};

const init = () => {
    optionsContainer.innerHTML = "";
    getNews();
    CreateOptions();
};

window.onload = () => {
    requestURL = 'https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}';
    init(); 
}