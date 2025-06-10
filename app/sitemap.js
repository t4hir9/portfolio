 export default function sitemap() {
  return [
    {
      url: 'https://khaleelalhaji.info/',
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://khaleelalhaji.info/projects',
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}