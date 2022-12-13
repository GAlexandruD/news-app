import fetchNews from "../../lib/fetchNews";
import NewsList from "../NewsList";

type Props = {
  searchParams?: { query: string };
};

const SearchPage = async ({ searchParams }: Props) => {
  const news: NewsResponse = await fetchNews(
    "general",
    searchParams?.query,
    true
  );

  return (
    <div>
      <h1 className="headerTitle underline decoration-orange-400">
        Search results for: {searchParams?.query}
      </h1>

      <NewsList news={news} />
    </div>
  );
};

export default SearchPage;
