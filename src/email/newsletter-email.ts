import { eq } from "drizzle-orm";
import db from "@/db";
import { articles, usersSync } from "@/db/schema";
import resend from "@/email";
import CelebrationTemplate from "./EmailTemplate";

const BASE_URL = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export async function sendNewsletterEmail(
  articleId: number,
  pageviews: number,
) {
  const [{ authorEmail, name, title }] = await db
    .select({
      id: usersSync.id,
      authorEmail: usersSync.email,
      name: usersSync.name,
      title: articles.title,
    })
    .from(articles)
    .leftJoin(usersSync, eq(usersSync.id, articles.authorId))
    .where(eq(articles.id, articleId));

  if (!authorEmail) {
    console.error(`No author email found for article ID ${articleId}`);
    return;
  }

  console.log(
    `Sending newsletter email to ${authorEmail} for article ID ${articleId} with ${pageviews} pageviews`,
  );

  try {
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      // to: authorEmail,
      to: ['nicola.gasp11@gmail.com'],
      subject: `✨ You article got ${pageviews} views! ✨`,
      react: CelebrationTemplate({ pageviews, name: name || "Friend", articleTitle: title || undefined, articleUrl: `${BASE_URL}/wiki/${articleId}` }),
    });

    if (error) {
      return console.log({ error }, { status: 500 });
    }

    return console.log(data);
  } catch (error) {
    return console.log({ error }, { status: 500 });
  }
}
