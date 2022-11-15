import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav hidden>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/placetostay">Place To Stay</Link>
          </li>
          <li>
            <Link to="/nft">Nft</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
