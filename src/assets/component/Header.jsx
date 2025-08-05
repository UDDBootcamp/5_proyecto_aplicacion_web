import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">home</Link>
        <Link to="/sobre-nosotros">sobre nosotros</Link>
      </nav>
    </>
  );
};

export default Header;
