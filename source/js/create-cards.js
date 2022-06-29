import {getData} from './server';

const createCards = () => {

  const MAX_CARDS = 5;

  getData('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
      .then((data) => {
        const newArray = [...data.articles];
        fillCardsList(newArray);
      });

  const cardsWrapper = document.querySelector('.articles__list');
  const createCard = (item) => {
    const newCard = document.createElement('li');
    newCard.classList.add('article-item');
    newCard.innerHTML = `
        <div class="article-item__content">
          <p class="article-item__data">${item.publishedAt}</p>
          <p class="article-item__header">${item.title}</p>
          <div class="article-item__text">
            <p>${item.content}</p>
          </div>
          <p class="article-item__author">${item.author}</p>
          <a href="#" class="article__link" aria-label="ссылка на статью"></a>
        </div>
        `;
    cardsWrapper.append(newCard);
  };

  const fillCardsList = (array) => {
    array.forEach((item) => {
      item.content = item.content.slice(0, 200);
      createCard(item);
    });
    const cardsToHide = document.querySelectorAll('.article-item:nth-child(n+7)');
    cardsToHide.forEach((item) => {
      item.classList.add('is-hidden');
    });
  };

  const showCards = () => {
    const hiddenCards = document.querySelectorAll('.article-item.is-hidden');
    for (let i = 0; i <= MAX_CARDS; i++) {
      hiddenCards.forEach((item) => {
        if (item.classList.contains('is-hidden')) {
          hiddenCards[i].classList.remove('is-hidden');
        }
      });
    }
  };

  const loadButton = document.querySelector('.articles__button');
  loadButton.addEventListener('click', showCards);
};

export {createCards};


