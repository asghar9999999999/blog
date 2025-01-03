import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

interface BlogCardProps {
    post: {
        title: string
        excerpt: string
        author: {
            name: string
            avatar: string
        }
        image: string
        slug: string
        date: string
        category: string
    }
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="group">
            <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative">
                    <Image
                        src={post.image}
                        alt={post.title}
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">{formatDate(post.date)}</span>
                        <span className="text-sm font-medium text-blue-600">{post.category}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                        {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center space-x-3">
                        <Image
                            src={post.author.avatar}
                            alt={post.author.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="text-sm text-gray-600">{post.author.name}</span>
                    </div>
                </div>
            </article>
        </Link>
    )
}

