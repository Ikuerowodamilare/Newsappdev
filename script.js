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
const generateUI = (articles) => {};

const init = () => {
    optionsContainer.innerHTML = "";
    getNews();
    CreateOptions();
};

window.onload = () => {
    requestURL = 'https://newsapi.org/v2/top-headlines?country=${country}&category=general&apiKey=${apiKey}';
    init(); 
}