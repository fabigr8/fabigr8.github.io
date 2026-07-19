// Small formatting helpers shared across blog views.

const dateFmt = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function formatDate(date: Date): string {
  return dateFmt.format(date);
}

/** Machine-readable YYYY-MM-DD for <time datetime="…">. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/** Rough reading time from raw post body (~200 words/min, min 1). */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}
