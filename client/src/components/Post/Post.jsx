import { Link } from "react-router-dom";
import "./post.css";

const Post = ({post}) => {
  const img = "https://mernblogproject.onrender.com/uploads/";
  // console.log(img);
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={img + post.photo} alt="" />}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <span className="postTitle">
          <Link to={`/post/${post._id}`} className="link">
            <span className="postTitle">{post.title}</span>
          </Link>
        </span>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
};

export default Post;
