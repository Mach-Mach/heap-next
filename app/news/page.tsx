import ListLayout from '@/layouts/ListNewsLayout'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { allNewsposts } from 'contentlayer/generated'
import { genPageMetadata } from 'app/seo'

const POSTS_PER_PAGE = 5

export const metadata = genPageMetadata({ title: 'Post' })

export default function BlogPage() {
  const posts = allCoreContent(sortPosts(allNewsposts))
  const pageNumber = 1
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="Lateset Tech News"
    />
  )
}
