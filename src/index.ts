const news = document.querySelector("#news");

// let apiUrl = "https://newsapi.org/v2/";
// let apiKey = "ca29f668747d463ca046db6746ca3f2c";

let apiUrl = process.env.API_URL;
let apiKey = process.env.API_KEY;

type TNews = {
  title: string;
  author: string;
  description: string;
  urlToImage: string;
  url: string;
};

async function fetchNews() {
  let response = await fetch(
    `${apiUrl}everything?q=tesla&from=2024-11-13&sortBy=publishedAt&apiKey=${apiKey}`
  );
  let a: string = "link to source ->";
  let obj = await response.json();
  console.log(obj.articles);
  renderNews(obj.articles, a);
}
fetchNews();

function renderNews(newsArr: TNews[], a: string) {
  newsArr.forEach((newItem) => {
    const listItem = document.createElement("div");
    listItem.className = "news__item";
    news?.appendChild(listItem);

    const imgItem = document.createElement("img");
    imgItem.src = newItem.urlToImage;
    listItem.appendChild(imgItem);

    const titleItem = document.createElement("h2");
    titleItem.innerHTML = newItem.title;
    listItem.appendChild(titleItem);

    const authorItem = document.createElement("h4");
    authorItem.innerHTML = newItem.author;
    listItem.appendChild(authorItem);

    const desItem = document.createElement("p");
    desItem.innerHTML = newItem.description;
    listItem.appendChild(desItem);

    const urlItem = document.createElement("a");
    urlItem.href = newItem.url;
    urlItem.innerHTML = a;
    listItem.appendChild(urlItem);
  });
}
