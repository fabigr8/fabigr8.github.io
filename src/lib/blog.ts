// Shared helpers for the blog listing (homepage + paginated /blog/page/N).
import { getCollection, type CollectionEntry } from "astro:content";

export const PAGE_SIZE = 10;

export async function getSortedPosts(): Promise<CollectionEntry<"blog">[]> {
  const posts = await getCollection("blog", ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export interface YearGroup {
  year: string;
  posts: CollectionEntry<"blog">[];
}

/** Groups already-sorted (newest-first) posts into consecutive runs by year. */
export function groupByYear(posts: CollectionEntry<"blog">[]): YearGroup[] {
  const groups: YearGroup[] = [];
  for (const post of posts) {
    const year = String(post.data.pubDate.getFullYear());
    const last = groups[groups.length - 1];
    if (last?.year === year) {
      last.posts.push(post);
    } else {
      groups.push({ year, posts: [post] });
    }
  }
  return groups;
}
