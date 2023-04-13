import "./posts.css";
import Post from "../Post/Post";

const Posts = ({posts}) => {
  return (
    <div className="posts">
      {posts.map((data)=><Post post={data}/>)}
    </div>
  );
}

export default Posts;