import { asc, eq, gt } from "drizzle-orm";
import db from "@/db/index";
import { articles, usersSync } from "@/db/schema";
import redis from "@/db-cache";

export type ArticleList = {
  id: number;
  title: string;
  createdAt: string;
  summary: string | null;
  content: string;
  author: string | null;
  imageUrl?: string | null;
};

// READ ALL ARTICLES
export async function getArticles(): Promise<ArticleList[]> {
  const cachedArticles = await redis.get<ArticleList[]>("articles:all");
  if (cachedArticles) {
    console.log("🗄️ Serving articles from cache 📦");
    return cachedArticles;
  }

  console.log("🔎 Fetching articles from database 🤖");

  const response = await db
    .select({
      title: articles.title,
      id: articles.id,
      createdAt: articles.createdAt,
      content: articles.content,
      author: usersSync.name,
      summary: articles.summary
    })
    .from(articles)
    .leftJoin(usersSync, eq(articles.authorId, usersSync.id));

  await redis.set("articles:all", response, { ex: 60 }); // cache for 60 seconds out of time...

  return response as unknown as ArticleList[];
}

// READ WITH CORSOR PAGINATED ARTICLES
export const nextArticlesPage = async (cursor?: number, pageSize = 5): Promise<ArticleList[]> => {
  const response = await db
    .select({
      title: articles.title,
      id: articles.id,
      createdAt: articles.createdAt,
      content: articles.content,
      author: usersSync.name,
      summary: articles.summary
    })
    .from(articles)
    .where(cursor ? gt(articles.id, cursor) : undefined) // if cursor is provided, get rows after it
    .limit(pageSize) // the number of rows to return
    .orderBy(asc(articles.id)) // ordering
    .leftJoin(usersSync, eq(articles.authorId, usersSync.id));
  return response as unknown as ArticleList[];
};

export type ArticleWithAuthor = {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  imageUrl?: string | null;
  author: string | null;
};

// READ ONE ARTICLE
export async function getArticleById(id: number): Promise<ArticleWithAuthor | null> {
  const response = await db
    .select({
      title: articles.title,
      id: articles.id,
      createdAt: articles.createdAt,
      content: articles.content,
      author: usersSync.name,
      imageUrl: articles.imageUrl,
    })
    .from(articles)
    .where(eq(articles.id, id))
    .leftJoin(usersSync, eq(articles.authorId, usersSync.id));
  return response[0] ? (response[0] as unknown as ArticleWithAuthor) : null;
}
