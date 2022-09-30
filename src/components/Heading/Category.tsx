import "./styles.css";
import { Link, Outlet } from "react-router-dom";

function Category() {
  return (
    <>
      <div className="category-nav">
        <div className="category">
          <Link to="/">
            <button>Editorial</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/wallpapers">
            <button className="active">Wallpapers</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/3d-renders">
            <button className="active">3D Renders</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/health-and-wellness">
            <button className="active">Health & Wellness</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/texture-and-patterns">
            <button>Texture & Patterns</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/nature">
            <button>Nature</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/current-events">
            <button>Current Events</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/architecture">
            <button>Architecture</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/business-and-work">
            <button>Business & Work</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/film">
            <button>Film</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/animals">
            <button>Animals</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/fashion">
            <button>Fashion</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/food-and-drink">
            <button>Food & Drink</button>
          </Link>
        </div>
        <div className="category">
          <Link to="/t/spirituality">
            <button>Spirituality</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Category;
