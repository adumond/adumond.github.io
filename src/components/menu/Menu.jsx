import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a>Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a>Portfolio</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a>About Me</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a>Contact</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a>Resume</a>
        </li>
      </ul>
    </div>
  );
}
