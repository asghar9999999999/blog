import { BlogCard } from '@/components/blog-card'

const DUMMY_POSTS = [
    {
        id: 1,
        title: 'Artificial Intelligence',
        excerpt: 'Learn how to create an office environment that boosts productivity and employee satisfaction.',
        author: {
            name: 'Ali Asghar',
            avatar: '/c.jpg?height=40&width=40',
        },
        image: '/ai.jpg?height=200&width=300',
        slug: 'artificial-intelligence',
        date: '2023-06-01',
        category: 'Technolgy',
    },
    {
        id: 2,
        title: '5G Internet',
        excerpt: 'Learn how to create an office environment that boosts productivity and employee satisfaction.',
        author: {
            name: 'Ali Asghar',
            avatar: '/c.jpg?height=40&width=40',
        },
        image: '/5g.jpg?height=200&width=300',
        slug: '5g-internet',
        date: '2023-06-01',
        category: 'Internet',
    },
    {
        id: 3,
        title: 'Quantum Computing',
        excerpt: 'Learn how to create an office environment that boosts productivity and employee satisfaction.',
        author: {
            name: 'Ali Asghar',
            avatar: '/c.jpg?height=40&width=40',
        },
        image: '/qc.jpg?height=200&width=300',
        slug: 'quantum-computing',
        date: '2023-06-01',
        category: 'Quantum Computing',
    }, {
        id: 4,
        title: 'Metaverse',
        excerpt: 'Learn how to create an office environment that boosts productivity and employee satisfaction.',
        author: {
            name: 'Ali Asghar',
            avatar: '/c.jpg?height=40&width=40',
        },
        image: '/meta.jpg?height=200&width=300',
        slug: 'metaverse',
        date: '2023-06-01',
        category: 'Metaverse',
    }, {
        id: 5,
        title: 'Fiance',
        excerpt: 'Learn how to create an office environment that boosts productivity and employee satisfaction.',
        author: {
            name: 'Ali Asghar',
            avatar: '/c.jpg?height=40&width=40',
        },
        image: '/block.jpg?height=200&width=300',
        slug: 'blockchain',
        date: '2023-06-01',
        category: 'Fiance',
    }, {
        id: 6,
        title: 'Cybersecurity',
        excerpt: 'Learn how to create an office environment that boosts productivity and employee satisfaction.',
        author: {
            name: 'Ali Asghar',
            avatar: '/c.jpg?height=40&width=40',
        },
        image: '/cyber.jpg?height=200&width=300',
        slug: 'cybersecurity',
        date: '2023-06-01',
        category: 'Cybersecurity',
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

