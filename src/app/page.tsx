import { WikiCard } from "@/components/ui/wiki-card";

import { getArticles } from "@/lib/data/articles";
import Image from "next/image";

export default async function Home() {
  // function to read from the DB
  const articles = await getArticles();

  // const articles = await nextArticlesPage(0);
  return (
    <div>
      <main className="max-w-2xl mx-auto mt-10 flex flex-col gap-6 items">
        <Image
              src="/logo-black-.webp"
              alt="The Ocean Affairs Blog"
              width={150}
              height={40}
              priority
            />
        <h2 className="text-lg text-muted-foreground mb-8">
          A collection of articles about ocean affairs, marine conservation, and 
          related topics, visual reports about the Oceans and explained through maps and visual contents.
        </h2>
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
