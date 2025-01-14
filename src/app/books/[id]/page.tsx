import React from 'react';
import Image from 'next/image';
import { Book } from '@/types';

const SingleBookPage = async ({ params }: { params: { id: string } }) => {
    const { id } = await params;
    console.log('book Id:', id);

    let book: Book | null = null;
    try {
        const response = await fetch(`${process.env.BACKEND_URL}/books/${id}`, {
            next: {
                revalidate: 3600,
            },
        });

        console.log('Response Status:', response.status);
        const data = await response.json();

        // Check if the response is structured properly
        if (!response.ok || !data.book) {
            throw new Error('Error fetching book');
        }

        book = data.book; // Assuming the response contains a "book" object
        console.log('Fetched book:', book);
    } catch (err: any) {
        throw new Error('Error fetching book');
    }

    if (!book) {
        throw new Error('Book not found');
    }

    return (
        <div className="mx-auto grid max-w-6xl grid-cols-3 gap-10 px-5 py-10">
            <div className="col-span-2 pr-16 text-primary-950">
                <h2 className="mb-5 text-5xl font-bold leading-[1.1]">{book.title || 'N/A'}</h2>
                <p className="mt-5 text-lg leading-8">{book._id}</p>
                <span className="font-semibold">by {book.author.name}</span>
                {/* PDF Download Link */}
                <a
                    href={book.pdfFile || '#'}
                    className="text-blue-600 mt-5 inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Download PDF
                </a>
            </div>
            <div className="flex justify-end">
                <Image
                    className="rounded-t-lg"
                    src={book.coverImage}
                    alt="Blog Image"
                    width={400}
                    height={250}
                />
            </div>
        </div>
    );
};

export default SingleBookPage;