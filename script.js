const container = document.querySelector(".container");
const optionsContainer = document.querySelector(".options-container");
const country = "in";
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
        <img src="${items.urlToImage || "./newspaper.jpg"} "alt=""/></div>
    }
    <div class = "news-content">
        <div class = "news-title">
            ${item.title}
        </div>
        <div class="news-description">
            ${item.description || item.content || ""}
        </div>
        <a href ="${item.url}" target="_blank"
        class ="view-button">Read More</a>
    </div>`;
    container.appendChild(card);
};

//Calling API
const getNews = async () => {
    container.innerHTML = "";
    let response = await fetch(requestURL);
    if (!response.ok) {
        alert("Data unavailable at the moment. Please try again later");
        return false;
    }  
    let data = await response.json();
    generateUI(data.articles);
};


const init = () => {
    optionsContainer.innerHTML = "";
    getNews();
    CreateOptions();
};

window.onload = () => {
    requestURL = 'https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}';
    init(); 
};