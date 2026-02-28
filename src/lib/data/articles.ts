import { asc, eq, gt } from "drizzle-orm";
import db from "@/db/index";
import { articles, usersSync } from "@/db/schema";

// READ ALL ARTICLES
export async function getArticles() {
  const response = await db
    .select({
      title: articles.title,
      id: articles.id,
      createdAt: articles.createdAt,
      content: articles.content,
      author: usersSync.name,
    })
    .from(articles)
    .leftJoin(usersSync, eq(articles.authorId, usersSync.id));
  return response;
}

// READ WITH CORSOR PAGINATED ARTICLES
export const nextArticlesPage = async (cursor?: number, pageSize = 5) => {
  const response = await db
    .select({
      title: articles.title,
      id: articles.id,
      createdAt: articles.createdAt,
      content: articles.content,
      author: usersSync.name,
    })
    .from(articles)
    .where(cursor ? gt(articles.id, cursor) : undefined) // if cursor is provided, get rows after it
    .limit(pageSize) // the number of rows to return
    .orderBy(asc(articles.id)) // ordering
    .leftJoin(usersSync, eq(articles.authorId, usersSync.id));
  return response;
};

// READ ONE ARTICLE
export async function getArticleById(id: number) {
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
  return response[0] ? response[0] : null;
}
