import Link from 'next/link'
import { blogPosts } from '@/lib/blogData'

export default function BlogList() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {blogPosts.map((post) => (
                    <div key={post.slug} className="bg-white shadow-md rounded-lg p-4">
                        <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                        <p className="text-gray-600 mb-4">{post.content.substring(0, 100)}...</p>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:underline"
                        >
                            Read More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
