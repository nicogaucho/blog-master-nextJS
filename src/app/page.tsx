import { WikiCard } from "@/components/ui/wiki-card";

import { getArticles } from "@/lib/data/articles";

export default async function Home() {
  // function to read from the DB
  const articles = await getArticles();

  // const articles = await nextArticlesPage(0);
  return (
    <div>
      <main className="max-w-2xl mx-auto mt-10 flex flex-col gap-6">
        {articles.map(({ title, id, createdAt, content, author, summary }) => (
          <WikiCard
            title={title}
            author={author ? author : "Unknown"}
            date={createdAt}
            content={content}
            summary={summary ?? ""} // temporary
            href={`/wiki/${id}`}
            key={id}
          />
        ))}
      </main>
    </div>
  );
}
