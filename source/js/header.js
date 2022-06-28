const header = document.querySelector('.header');
const root = document.querySelector(':root');

const initHeader = () => {
  window.addEventListener('resize', () => {

    if (header) {
      const height = getComputedStyle(header).height;
      root.style.setProperty('--header-height', height);
    }

  });
};

export {initHeader};
