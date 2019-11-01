// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(response => {
        console.log(response);

        const cardContainer = document.querySelector(`.cards-container`);

        const articleList = Object.keys(response.data.articles);

        console.log(articleList);

        articleList.forEach((element) => {
            response.data.articles[element].forEach((subElement) => {
                cardContainer.appendChild(createArticle(subElement));
            });
        });
    });

function createArticle(data) {
    //Construct elements
    const
        card = document.createElement(`div`),
        headline = document.createElement(`div`),
        author = document.createElement(`div`),
        imgContainer = document.createElement(`div`),
        authorImg = document.createElement(`img`),
        authorName = document.createElement(`span`);

    //Set contents/styling
    headline.textContent = data.headline;
    authorImg.src = data.authorPhoto;
    authorName.textContent = data.authorName;

    //Set classes
    card.classList.add(`card`);
    headline.classList.add(`headline`);
    author.classList.add(`author`);
    imgContainer.classList.add(`img-container`);

    //Define structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImg);
    author.appendChild(authorName);

    //Add events    


    return card;
}