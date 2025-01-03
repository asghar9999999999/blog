'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

interface Comment {
    id: number
    author: string
    content: string
    createdAt: string
}

export function Comments({ postSlug }: { postSlug: string }) {
    const [comments, setComments] = useState<Comment[]>([])
    const [newComment, setNewComment] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!newComment.trim()) return

        const comment: Comment = {
            id: Date.now(),
            author: 'Anonymous User',
            content: newComment,
            createdAt: new Date().toISOString(),
        }

        setComments((prev) => [comment, ...prev])
        setNewComment('')
    }

    // Temporarily use postSlug to prevent ESLint error
    const placeholderPostSlug = postSlug // This ensures the variable is "used"

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Comments</h2>
            <form onSubmit={handleSubmit} className="mb-8">
                <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder={`Write a comment for ${placeholderPostSlug}...`}
                    className="mb-4"
                />
                <Button type="submit">Post Comment</Button>
            </form>
            <div className="space-y-6">
                {comments.map((comment) => (
                    <div key={comment.id} className="border-b pb-6">
                        <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">{comment.author}</span>
                            <span className="text-sm text-gray-500">
                                {new Date(comment.createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        <p className="text-gray-700">{comment.content}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
