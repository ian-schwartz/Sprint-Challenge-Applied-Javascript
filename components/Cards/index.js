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
const cardsContainer = document.querySelector('.cards-container');

function cards(object) {
    const cardDiv = document.createElement('div'),
          headlineDiv = document.createElement('div'),
          authorDiv = document.createElement('div'),
          imgDiv = document.createElement('div'),
          authorImg = document.createElement('img'),
          nameSpan = document.createElement('span');

          cardDiv.classList.add('card');
          headlineDiv.classList.add('headline');
          authorDiv.classList.add('author');
          imgDiv.classList.add('img-container');

          headlineDiv.textContent = object.headline;
          authorImg.src = object.authorPhoto;
          nameSpan.textContent = object.authorName;

          cardDiv.appendChild(headlineDiv);
          cardDiv.appendChild(authorDiv);
          authorDiv.appendChild(imgDiv);
          imgDiv.appendChild(authorImg);
          imgDiv.appendChild(nameSpan);

          return cardDiv;
}

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response, 'Data for article cards');
        const articles = response.data.articles;
        for (topic in articles) {
            articles[topic].forEach(article => {
              cardsContainer.appendChild(cards(article));
            });
        }
        // articles.forEach((item) => {
        //     cardsContainer.appendChild(cards(articles))
    })
    .catch(error => {
        console.log(error, 'The data was not returned');
    });

    // articles = object.data.articles;

    // object.data.articles.forEach(item => {axios.get(item)
    // .then(response => {
    //     console.log(response, 'Data for article cards');
    //     cardsContainer.appendChild(cards(response.data.articles));
    // })
    // .catch(error => {
    //     console.log(error, 'The data was not returned');
    //  });
    // })





    // response.data.articles.forEach((item) => {
    //     cardsContainer.appendChild(cards(response.data));
    // })