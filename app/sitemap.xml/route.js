export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://tahiradamu.info/</loc>
      <lastmod>2025-06-13</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://tahiradamu.info/projects</loc>
      <lastmod>2025-06-13</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://tahiradamu.info/resume</loc>
      <lastmod>2025-06-13</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}