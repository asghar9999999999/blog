import { BlogGrid } from '@/components/blog-grid'
import { Hero } from '@/components/hero'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
    return (
        <div className="min-h-screen">
            <Hero />
            <section className="container mx-auto px-4 py-12">
                <h2 className="text-2xl font-bold mb-8">Recent Blog Posts</h2>
                <BlogGrid limit={6} />
                <div className="mt-8 text-center">
                    <Link href="/blogs">
                        <Button variant="outline" size="lg">Show More</Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}

