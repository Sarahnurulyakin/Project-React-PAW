import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import BookForm from "./components/BookForm";
import BookCard from "./components/BookCard";
import "./styles/App.css";

export default function App() {
  const [books, setBooks] = useState(() => {
    const saved = localStorage.getItem("books");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, title: "Harry Potter", author: "J.K. Rowling", year: 2000, category: "Fiksi" },
          { id: 2, title: "Lord of The Rings", author: "J.R.R. Tolkien", year: 1954, category: "Fiksi" },
        ];
  });

  const [editingBook, setEditingBook] = useState(null);
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => setBooks([...books, { id: Date.now(), ...book }]);
  const updateBook = (updatedBook) => {
    setBooks(books.map((b) => (b.id === updatedBook.id ? updatedBook : b)));
    setEditingBook(null);
  };
  const deleteBook = (id) => {
    if (window.confirm("Yakin ingin menghapus buku ini?")) {
      setBooks(books.filter((b) => b.id !== id));
    }
  };

  return (
    <div className="app">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

      <div className="main-content">
        {activeMenu === "Tambah Buku" && (
          <BookForm addBook={addBook} editingBook={editingBook} updateBook={updateBook} />
        )}

        {activeMenu === "Dashboard" && (
          <div className="grid">
            {books.map((b) => (
              <BookCard
                key={b.id}
                book={b}
                onEdit={() => setEditingBook(b)}
                onDelete={() => deleteBook(b.id)}
              />
            ))}
          </div>
        )}

{activeMenu === "Daftar Buku" && (
  <div className="list-grid">
    {books.map((b) => (
      <div key={b.id} className="list-card">
        <h3>{b.title}</h3>
        <p>Penulis: {b.author}</p>
        <p>Tahun: {b.year}</p>
        <span className="badge">{b.category}</span>
      </div>
    ))}
  </div>
)}

          
        {activeMenu === "About" && (
          <div className="about-wrapper">
            <div className="about-card">
              <h2>Tentang Aplikasi Manajemen Buku</h2>
              <p>
                Selamat datang di Aplikasi Manajemen Buku! Aplikasi ini dibuat untuk mempermudah pengelolaan data buku,
                termasuk menambahkan buku baru, mengedit informasi buku yang sudah ada, serta menghapus buku yang tidak
                diperlukan. Selain itu, Anda dapat melihat daftar buku lengkap dengan kategori dan tahun terbitnya.
              </p>
              <p>
                Aplikasi ini dibangun menggunakan <strong>React</strong> dan memanfaatkan <strong>LocalStorage</strong> agar
                data buku tetap tersimpan meskipun halaman direfresh. Layout aplikasi menggunakan sidebar navigasi
                yang responsif, sehingga nyaman digunakan pada desktop maupun perangkat mobile.
              </p>
              <p>Fitur utama aplikasi ini meliputi:
                <ul>
                  <li>Dashboard buku dengan tampilan grid interaktif</li>
                  <li>Form tambah dan edit buku</li>
                  <li>Daftar buku ringkas dan mudah dibaca</li>
                  <li>Informasi aplikasi di halaman About</li>
                </ul>
              </p>
              <p>
                Dibuat oleh: <strong>Sarah Nurul Yakin</strong><br />
                Tahun: 2025
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
