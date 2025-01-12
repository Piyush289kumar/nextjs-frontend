import { Book } from '@/types'
import React from 'react'
import Cards from './Cards'

const BookList = ({ books }: { books: Book[] }) => {
    return (
        <div>
            {
                books.map((book) => (
                    <Cards key={book._id} book={book} />
                ))
            }
        </div>
    )
}

export default BookList