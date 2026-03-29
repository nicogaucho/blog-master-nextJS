import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatDate } from "@/lib/utils";

interface WikiCardProps {
  title: string;
  author: string;
  date: string;
  summary: string;
  content: string;
  href: string;
}

export function WikiCard({
  title,
  author,
  date,
  summary,
  content,
  href,
}: WikiCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{author}</span>
          <span>•</span>
          <span>{formatDate(date)}</span>
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="py-0">
        <CardDescription>
          {summary ? summary : content.substring(0, 200)}
        </CardDescription>
        {summary && (
          <p className="text-xs mt-4">
            Article summary by AI SDK - OpenAi/gpt-5-nano
          </p>
        )}
      </CardContent>
      <CardFooter className="pt-2">
        <Link
          href={href}
          className="text-sky-600 hover:underline text-sm font-medium w-fit"
        >
          Read full article &rarr;
        </Link>
      </CardFooter>
    </Card>
  );
}
