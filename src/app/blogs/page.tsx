import { BlogGrid } from '@/components/blog-grid'

export default function AllBlogPosts() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">All Blog Posts</h1>
            <BlogGrid />
        </div>
    )
}

