import "./sidebar.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const Sidebar = () => {
  // const [cats, setCats] = useState([]);


  // useEffect(() => {
  //   const getCats = async () => {
  //     const res = await axios.get("/categories");
  //     setCats(res.data);
  //   };
  //   getCats();
  // }, []);
  
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
          <img
            src="https://cdn.vectorstock.com/i/preview-1x/48/06/image-preview-icon-picture-placeholder-vector-31284806.jpg"
            alt=""
          />
       
        <p>
          I'm a, Full Stack developer Who is passionate to develop and enhance
          user-centered websites and applications. Creative and logical when
          crafting effective websites. I keep myself organized and make sure to
          prepare ahead so I can effectively manage my time.
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook"></i>
          <i className="sidebarIcon fa-brands fa-linkedin"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;