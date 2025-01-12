import Carousel from "@/components/Carousel";
import BookList from "./components/BookList";

export default async function Home() {

  const bookListResponse = await fetch(`${process.env.BACKEND_URL}/books`);
  if (!bookListResponse.ok) {
    throw new Error("Error While Fetching Book List Data.");
  }
  const bookList = await bookListResponse.json();

  return (

    <>
      <Carousel />
      <BookList books={bookList.books} />
    </>
  );
}
