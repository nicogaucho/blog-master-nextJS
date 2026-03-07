import { generateText } from "ai";

export default async function summarizeArticle(
  title: string,
  article: string,
): Promise<string> {
  if (!article || !article.trim()) {
    throw new Error("Article content is required to generate a summary.");
  }

  const prompt = `Summarize the following The Ocean Affairs article in 1-2 concise sentences. Focus on the main idea and the most important details a reader should remember. Do not add opinions or unrelated information. Your goal is inform users of what the gist of an article is so they can decide if they want to read more or not.\n\n<title>\n${title}</title>\n\n<The_Ocean_Affairs_content>\n${article}</The_Ocean_Affairs_content>`;

  const { text } = await generateText({
    model: "openai/gpt-5-nano",
    system: "You are an assistant that writes concise factual summaries.",
    prompt,
  });

  return (text ?? "").trim();
}
