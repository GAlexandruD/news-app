// TODO: Looks like searchParams is not working. Is returning undefined for now in production.
// https://github.com/vercel/next.js/issues/43077

// type Props = {
//   params?: {
//     num?: string;
//   };
//   searchParams?: {
//     title?: string;
//     description?: string;
//   };
// };

// const ArticlePage = (props: Props) => {
//   return (
//     <>
//       <p>Page: {props.searchParams?.title}</p>
//       <p>Order: {props.searchParams?.description}</p>
//     </>
//   );
// };

// export default ArticlePage;

"use client";
import { notFound, useSearchParams } from "next/navigation";
import LiveTimestamp from "../LiveTimestamp";

const ArticlePage = () => {
  const searchParams = useSearchParams();

  const image = searchParams.get("page");
  const title = searchParams.get("title");
  const author = searchParams.get("author");
  const published_at = searchParams.get("published_at");
  const source = searchParams.get("source");
  const description = searchParams.get("description");

  if (
    (searchParams && Object.entries(searchParams).length === 0) ||
    !searchParams
  ) {
    return notFound();
  }

  return (
    <article>
      <section>
        {image && (
          <img
            className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
            src={image}
            alt={title || "Article Image"}
          />
        )}
        <div className="px-10">
          <h1 className="headerTitle pb-2">{title}</h1>
          <div className="flex divide-x-2 space-x-4">
            <h2 className="font-bold">By: {author || "Unknown"}</h2>
            <h2 className="font-bold pl-4">Source: {source}</h2>
            <p className="pl-4">
              <LiveTimestamp time={published_at || "Unknown"} />
            </p>
          </div>

          <p className="pt-4">{description}</p>
        </div>
      </section>
    </article>
  );
};

export default ArticlePage;
