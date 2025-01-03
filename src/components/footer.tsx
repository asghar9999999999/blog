import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const CATEGORIES = [
    { name: 'Technology', slug: 'tech' },
    { name: 'Internet', slug: 'internet' },
    { name: 'Quantum Computing', slug: 'quantum-computing' },
    { name: 'Metaverse', slug: 'metaverse' },
    { name: 'Cybersecurity', slug: 'security' },
    { name: 'Fiance', slug: 'fiance' },
]

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Categories</h3>
                        <ul className="space-y-2">
                            {CATEGORIES.map((category) => (
                                <li key={category.slug}>
                                    <Link href={`/category/${category.slug}`} className="hover:text-gray-300">
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="hover:text-gray-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="hover:text-gray-300">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                <Facebook />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                <Twitter />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                <Instagram />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm text-gray-400">
                        © {new Date().getFullYear()} Your Blog Name Ali Asghar | All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

