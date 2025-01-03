import { blogPosts } from '@/lib/blogData'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'
import { notFound } from 'next/navigation'
import { Comments } from '@/components/comments'

async function getBlogPost(slug: string) {
    return blogPosts.find((post) => post.slug === slug) || null
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getBlogPost(params.slug)

    if (!post) {
        notFound()
    }

    return (
        <article className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                <div className="flex items-center justify-between mb-6 text-gray-600">
                    <div>
                        <span>{post.author}</span> • <span>{formatDate(post.date)}</span>
                    </div>
                    <span className="text-blue-600 font-medium">{post.category}</span>
                </div>
                {post.image && (
                    <div className="mb-6">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={800}
                            height={400}
                            className="rounded-lg"
                        />
                    </div>
                )}
                <div className="prose prose-lg max-w-none mb-12">
                    <p>{post.content}</p>
                </div>
                <Comments postSlug={params.slug} />
            </div>
        </article>
    )
}
