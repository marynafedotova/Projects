'use strict';

export default class News {
  API_KEY = 'mf2ZKk2WRkmRILCV7Hx6owUyqE6RpeF7cwBujgQp';

  async #getNewsList(keyword = '', isRefresh = false) {
    const currentTime = new Date().getTime();
    const timeDelta = 2 * 60 * 60 * 1000; // 2 hours in ms
    const storedNews = JSON.parse(localStorage.getItem('news')) || [];
    const newsTS = +localStorage.getItem('newsTS') || 0;

    if (storedNews.length && !isRefresh && (newsTS + timeDelta > currentTime)) {
      return storedNews;
    }

    const resp = await fetch(`https://api.marketaux.com/v1/news/all?search=${keyword}&filter_entities=true&language=en&api_token=${this.API_KEY}`);
    const respJSON = await resp.json();

    localStorage.setItem('news', JSON.stringify(respJSON.data));
    localStorage.setItem('newsTS', new Date().getTime());

    return respJSON.data;
  }

  async newsListHTML(keyword = '', isRefresh = false) {
    const newsList = await this.#getNewsList(keyword, isRefresh);
    let html = '<ul>';
    newsList.forEach(item => {
      html += `
        <li>
          <a href="${item.url}" target="_blank">${item.title}</a>
          <br>
          <button type="button" class="btn-detail" data-uuid=${item.uuid}>Detail</button>
        </li>`;
    });
    html += '</ul>';
    return html;
  }

  async getNewsDetail(uuid) {
    console.log(uuid);
    const resp = await fetch(`https://api.marketaux.com/v1/news/uuid/${uuid}?api_token=${this.API_KEY}`);
    const respJSON = await resp.json();
    return respJSON;
  }
}
