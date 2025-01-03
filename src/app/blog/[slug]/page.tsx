import { Comments } from '@/components/comments'
import Image from 'next/image'
import { formatDate } from '@/lib/utils'

// This is a mock function to fetch blog data. In a real application, you would fetch this data from your API or database.
async function getBlogPost(slug: string) {
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
        title: 'Tips for Office Design for a Productive Workplace',
        content: 'Learn how to create an office environment that boosts productivity and employee satisfaction...',
        image: '/ai.jpg?height=400&width=800',
        author: 'Ali Asghar',
        date: '2023-06-01',
        category: 'Web Development',
        
        
    }
    
}


export default async function BlogPost({ params }: { params: { slug: string } }) {
    const post = await getBlogPost(params.slug)

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
                    {/* Add more content sections as needed */}
                </div>
                
                <Comments postSlug={params.slug} />
            </div>
        </article>
    )
}
