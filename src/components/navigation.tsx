import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from 'lucide-react'

const CATEGORIES = [
    { name: 'Web Development', slug: 'web-dev' },
    { name: 'Mobile Development', slug: 'mobile-dev' },
    { name: 'Artificial Intelligence', slug: 'ai' },
    { name: 'Cloud Computing', slug: 'cloud' },
    { name: 'Cybersecurity', slug: 'security' },
]

export function Navigation() {
    return (
        <nav className="border-b">
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
                <Link href="/" className="text-xl font-bold">
                    Blog
                </Link>
                <div className="flex flex-wrap justify-center md:justify-start items-center space-x-4 md:space-x-6 mt-4 md:mt-0">
                    <Link href="/" className="hover:text-gray-600">Home</Link>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center hover:text-gray-600">
                            Categories <ChevronDown className="ml-1 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            {CATEGORIES.map((category) => (
                                <DropdownMenuItem key={category.slug}>
                                    <Link href={`/category/${category.slug}`}>
                                        {category.name}
                                    </Link>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Link href="/blogs" className="hover:text-gray-600">Blogs</Link>
                    <Link href="/create" className="hover:text-gray-600">Write Blog</Link>
                    <Link href="/about" className="hover:text-gray-600">About</Link>
                    <Link href="/contact" className="hover:text-gray-600">Contact</Link>
                </div>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    <Link href="/login">
                        <Button variant="outline">Log In</Button>
                    </Link>
                    <Link href="/signup">
                        <Button>Sign Up</Button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

