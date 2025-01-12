export type Book = {
    _id: string,
    title: string,
    coverImage: string,
    pdfFile: string,
    author: Author,
}

export type Author = {
    name: string
}