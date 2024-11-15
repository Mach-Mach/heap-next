import { MetadataRoute } from 'next'
import { allArticles, allNews } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allArticles
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  const newsRoutes = allNews.map((post) => ({
    url: `${siteUrl}/${post.path}`,
    lastModified: post.date || post.date,
  }))

  const routes = ['', 'articles', 'projects', 'tags', 'blogs'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes, ...newsRoutes]
}
