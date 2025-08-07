import { Link } from "react-router-dom";

const Header = () => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Sobre Nosotros", path: "/sobre-nosotros" },
  ];
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            {pages.map((page) => (
              <li class="nav-item">
                <Link
                  key={page.name}
                  className="nav-link active"
                  aria-current="page"
                  to={page.path}
                >
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
