import news from "./news";

const categories = [];

for (const eachNews of news) {
  if (!categories.includes(eachNews.category)) {
    categories.push(eachNews.category);
  }
}

export default categories;
