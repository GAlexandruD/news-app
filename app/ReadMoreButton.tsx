import Link from "next/link";

type Props = {
  article: Article;
};

const ReadMoreButton = ({ article }: Props) => {
  const queryString = Object.entries(article)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return (
    <button className="bg-orange-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-orange-500">
      <Link href={`/article?${queryString}`}>Read More...</Link>
    </button>
  );
};

export default ReadMoreButton;
