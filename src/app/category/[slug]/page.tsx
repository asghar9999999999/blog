import { BlogGrid } from '@/components/blog-grid'

export default function CategoryPage({ params }: { params: { slug: string } }) {
    const getCategoryName = (slug: string) => {
        const categories = {
            'web-dev': 'Web Development',
            'mobile-dev': 'Mobile Development',
            'ai': 'Artificial Intelligence',
            'cloud': 'Cloud Computing',
            'security': 'Cybersecurity',
        }
        return categories[slug as keyof typeof categories] || 'Unknown Category'
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8">{getCategoryName(params.slug)}</h1>
            <BlogGrid category={params.slug} />
        </div>
    )
}
