import { useState } from "react";
import "./styles.css";

function Category() {

  const [name, setName] = useState('');

  // const getImages = ({value) => {
  //   setName(value);

  // }
  // onClick={getImages('Editorial')}

  return (
    <div className="category-nav">
      <div className="category">
        <a href="#" >Editorial</a>
      </div>
      <div className="category">
        <a href="#" className="active">
          Wallpapers
        </a>
      </div>
      <div className="category">
        <a href="#" className="active">
          Travel
        </a>
      </div>
      <div className="category">
        <a href="#" className="active">
          3D Renders
        </a>
      </div>
      <div className="category">
        <a href="#" className="active">
          Health & Wellness
        </a>
      </div>
      <div className="category">
        <a href="#">Texture & Patterns</a>
      </div>
      <div className="category">
        <a href="#">Nature</a>
      </div>
      <div className="category">
        <a href="#">Current Events</a>
      </div>
      <div className="category">
        <a href="#">Architecture</a>
      </div>
      <div className="category">
        <a href="#">Business & Work</a>
      </div>
      <div className="category">
        <a href="#">Film</a>
      </div>
      <div className="category">
        <a href="#">Animals</a>
      </div>
      <div className="category">
        <a href="#">Travel</a>
      </div>
      <div className="category">
        <a href="#">Fashion</a>
      </div>
      <div className="category">
        <a href="#">Food & Drink</a>
      </div>
      <div className="category">
        <a href="#">Spirituality</a>
      </div>
    </div>
  );
}

export default Category;
