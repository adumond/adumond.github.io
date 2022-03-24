export default function NavTabs({
  currentPage,
  handlePageChange,
  menuOpen,
  setMenuOpen,
}) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li
          onClick={() => {
            handlePageChange("Home");
            setMenuOpen(false);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            handlePageChange("Portfolio");
            setMenuOpen(false);
          }}
        >
          Portfolio
        </li>
        <li
          onClick={() => {
            handlePageChange("About");
            setMenuOpen(false);
          }}
        >
          About Me
        </li>
        <li
          onClick={() => {
            handlePageChange("Contact");
            setMenuOpen(false);
          }}
        >
          Contact
        </li>
        <li
          onClick={() => {
            handlePageChange("Resume");
            setMenuOpen(false);
          }}
        >
          Resume
        </li>
      </ul>
    </div>
  );
}
