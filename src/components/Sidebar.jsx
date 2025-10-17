import "../styles/Sidebar.css";

export default function Sidebar({ activeMenu, setActiveMenu }) {
  const menuItems = ["Dashboard", "Tambah Buku", "Daftar Buku", "About"];

  return (
    <div className="sidebar">
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" viewBox="0 0 16 16">
          <path d="M1 2.828c.885-.37 2.154-.828 3-.828s2.115.458 3 .828v10.344c-.885-.37-2.154-.828-3-.828s-2.115.458-3 .828V2.828z"/>
          <path d="M4 1v12c.667-.3 1.667-.667 3-.667s2.333.367 3 .667V1c-.667.3-1.667.667-3 .667S4.667 1.3 4 1z"/>
        </svg>
        <h2>Manajemen Buku</h2>
      </div>
      <ul>
        {menuItems.map((item) => (
          <li
            key={item}
            className={activeMenu === item ? "active" : ""}
            onClick={() => setActiveMenu(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
