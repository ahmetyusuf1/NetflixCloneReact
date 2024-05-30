import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-5 py-4">
      <Link to={"/"}>
        <img
          src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
          style={{ maxWidth: 140 }}
        />
      </Link>
    </div>
  );
};

export default Header;
