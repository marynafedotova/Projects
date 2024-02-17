import News from "../classes/news.js";

const NewsAPI = new News();

(async () => {
  try {
    const newList = await NewsAPI.newsListHTML('');
    console.log(newList);

    document.body.insertAdjacentHTML('afterbegin', newList);

    document.addEventListener('click', async function (event) {
      if (event.target.className === 'btn-detail') {
        const newData = await NewsAPI.getNewsDetail(event.target.dataset.uuid);
        console.log(newData);
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
})();
