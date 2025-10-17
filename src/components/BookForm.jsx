import { useState, useEffect } from "react";
import "../styles/BookForm.css";

export default function BookForm({ addBook, editingBook, updateBook }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (editingBook) {
      setTitle(editingBook.title);
      setAuthor(editingBook.author);
      setYear(editingBook.year);
      setCategory(editingBook.category);
    }
  }, [editingBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, year, category };
    if (editingBook) {
      updateBook({ ...editingBook, ...book });
    } else {
      addBook(book);
    }
    setTitle(""); setAuthor(""); setYear(""); setCategory("");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>{editingBook ? "Edit Buku" : "Tambah Buku"}</h2>
      <input type="text" placeholder="Judul Buku" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="text" placeholder="Penulis" value={author} onChange={e => setAuthor(e.target.value)} required />
      <input type="number" placeholder="Tahun Terbit" value={year} onChange={e => setYear(e.target.value)} required />
      <input type="text" placeholder="Kategori" value={category} onChange={e => setCategory(e.target.value)} required />
      <button type="submit">{editingBook ? "Update" : "Tambah"}</button>
    </form>
  );
}
