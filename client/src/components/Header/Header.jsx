import React from 'react';
import "./Header.css";
// import TopBar from '../TopBar/TopBar';

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">React & Node</span>
          <span className="headerTitleLg">BLOG</span>
        </div>
        <img
          className="headerImg"
          src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2021/09/how-to-write-a-blog-post.png"
          alt=""
        />
      </div>
    </>
  );
}

export default Header;
