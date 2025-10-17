import "../styles/BookCard.css";

export default function BookCard({ book, onEdit, onDelete }) {
  return (
    <div className="card">
      <span className="badge">{book.category}</span>
      <h2>{book.title}</h2>
      <p>Penulis: {book.author}</p>
      <p>Tahun: {book.year}</p>
      <div>
        <button className="edit" onClick={onEdit}>Edit</button>
        <button className="delete" onClick={onDelete}>Hapus</button>
      </div>
    </div>
  );
}
