export default function sortNewsByImage(news: NewsResponse) {
  const newsWithImages = news.data.filter((article) => article.image !== null);
  const newsWithoutImages = news.data.filter(
    (article) => article.image === null
  );

  return {
    ...news,
    data: [...newsWithImages, ...newsWithoutImages],
  };
}
