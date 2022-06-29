import {loadButton} from './create-cards';

const select = document.querySelector('.select');

const filterSelect = () => {
  if (select) {
    const onSelectChange = (evt) => {
      const articleItems = document.querySelectorAll('.article-card');
      const articleItemsAfterSix = document.querySelectorAll('.article-card:nth-child(n+7)');
      const articleAuthors = document.querySelectorAll('.article-card__author');
      const selectedOptionValue = evt.target.value;

      const defaultSettings = () => {
        articleItems.forEach((item) => {
          item.classList.remove('is-hidden');
        });
        articleItemsAfterSix.forEach((item) => {
          item.classList.add('is-hidden');
        });
        loadButton.classList.remove('is-hidden');
      };

      const hideArticles = () => {
        articleItems.forEach((item) => {
          item.classList.add('is-hidden');
        });
        loadButton.classList.add('is-hidden');
      };


      switch (selectedOptionValue) {
        case '0':
          defaultSettings();
          break;
        case '1':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'n-tv NACHRICHTEN') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '2':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Die Presse') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '3':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Reuters') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '4':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Svetlana Ekimenko') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '5':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Gökberk Baycan') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '6':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Jesús Maturana') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '7':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Johnna Crider') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '8':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Consejo Editorial') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '9':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Auriane Polge') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '10':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Patrick Bellmer') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '11':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Sostav.ru') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '12':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Martin Holland') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '13':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'NRK') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '14':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'Eleonora Vasques') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
        case '15':
          hideArticles();
          articleAuthors.forEach((item) => {
            if (item.textContent === 'ABC News') {
              item.closest('.article-card').classList.remove('is-hidden');
            }
          });
          break;
      }
    };


    select.addEventListener('change', onSelectChange);
  }
};

export {filterSelect};
