import {getData} from './server';
const loadButton = document.querySelector('.articles__button');
const cardsWrapper = document.querySelector('.articles__list');

const createCards = () => {

  const MAX_CARDS = 5;

  if (cardsWrapper) {
    getData('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
        .then((data) => {
          const newArray = [...data.articles];
          fillCardsList(newArray);
        });

    const createCard = (item) => {
      const newCard = document.createElement('li');
      newCard.classList.add('article-card');
      newCard.innerHTML = `

          <p class="title title--small article-card__data">${item.publishedAt}</p>
          <p class="title title--medium article-card__header">${item.title}</p>
          <div class="article-card__text">
            <p>${item.content}</p>
          </div>
          <div class="article-card__author-wrapper">
            <p class="article-card__author">${item.author}</p>
          </div>
          <a href="#" class="article-card__link" aria-label="ссылка на статью" target="_blank"></a>

        `;
      cardsWrapper.append(newCard);
    };

    const fillCardsList = (array) => {
      array.forEach((item) => {
        item.content = item.content.slice(0, 200);
        item.publishedAt = item.publishedAt.slice(0, 10);
        if (item.author === null) {
          item.author = 'No author';
        }
        createCard(item);
      });
      const cardsToHide = document.querySelectorAll('.article-card:nth-child(n+7)');
      cardsToHide.forEach((item) => {
        item.classList.add('is-hidden');
      });
    };

    const showCards = () => {
      const hiddenCards = document.querySelectorAll('.article-card.is-hidden');
      for (let i = 0; i <= MAX_CARDS; i++) {
        hiddenCards.forEach((item) => {
          if (item.classList.contains('is-hidden')) {
            hiddenCards[i].classList.remove('is-hidden');
          }
        });
      }
    };

    if (loadButton) {
      loadButton.addEventListener('click', showCards);
      loadButton.addEventListener('click', () => {
        loadButton.classList.add('is-active');
      });
    }
  }
};


export {createCards};
export {loadButton};

