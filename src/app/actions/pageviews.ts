"use server";

import redis from "@/db-cache";
import { sendNewsletterEmail } from "@/email/newsletter-email";

const milestones = [10, 15, 20, 50, 100, 1000, 10000];

const keyFor = (id: number) => `pageviews:article:${id}`;

export async function incrementPageview(articleId: number) {
  const articleKey = keyFor(articleId);
  const newVal = await redis.incr(articleKey);
  console.log(
    `Pageview incremented for article ${articleId}, new count: ${newVal}`,
  );
  if (milestones.includes(newVal)) {
    console.log(
      `🎉 Article ${articleId} just hit ${newVal} pageviews! Sending newsletter email...`,
    );
    sendNewsletterEmail(articleId, +newVal);
  }
  return +newVal;
}
