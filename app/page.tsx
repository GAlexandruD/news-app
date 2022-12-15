import { categories } from "../constants";
import fetchNews from "../lib/fetchNews";
import NewsList from "./NewsList";
// import response from "../response.json";

const Homepage = async () => {
  // fetch the news data
  const news: NewsResponse = await fetchNews(categories.join(","));
  // response || (await fetchNews(categories.join(",")));
  // console.log("First item of news is here: ", news.data[0]);

  return (
    <div>
      <NewsList news={news} />
    </div>
  );
};

export default Homepage;
