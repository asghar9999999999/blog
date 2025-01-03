import { BlogCard } from '@/components/blog-card'

const DUMMY_POSTS = [
    {
        id: 1,
        title: 'Tips for Office Design for a Productive Workplace',
        excerpt: 'Learn how to create an office environment that boosts productivity and employee satisfaction.',
        author: {
            name: 'Ali Asghar',
            avatar: '/c.jpg?height=40&width=40',
        },
        image: '/ai.jpg?height=200&width=300',
        slug: 'tips-for-office-design',
        date: '2023-06-01',
        category: 'Web Development',
    },
    {
        id: 2,
        title: 'Ai Job & Market',
        excerpt: 'Learn how to create an office environment that boosts productivity and employee satisfaction.',
        author: {
            name: 'Ali Asghar',
            avatar: '/c.jpg?height=40&width=40',
        },
        image: '/job.jpg?height=200&width=300',
        slug: 'tips-for-office-design',
        date: '2023-06-01',
        category: 'Web Development',
    },
    // Add more dummy posts...
]

interface BlogGridProps {
    limit?: number;
    category?: string;
}

export function BlogGrid({ limit, category }: BlogGridProps) {
    const filteredPosts = category
        ? DUMMY_POSTS.filter(post => post.category.toLowerCase() === category.toLowerCase())
        : DUMMY_POSTS;

    const posts = limit ? filteredPosts.slice(0, limit) : filteredPosts;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>
    )
}

