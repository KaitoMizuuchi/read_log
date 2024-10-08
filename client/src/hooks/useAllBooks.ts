import { useEffect, useState } from "react"
import { fetchAllBooks } from "@/services/books/apiGetAllBooks";
import { bookProps } from "@/types";


export const useAllBooks = () => {
    const [books, setBooks] = useState<bookProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getAllBooks = async () => {
            try {
                const data = await fetchAllBooks();
                setBooks(data);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    console.log("Unexpected error", error);
                }
            } finally {
                setLoading(false);
            }
        };

        getAllBooks();
    }, [])


    return { books, loading, error };
}
