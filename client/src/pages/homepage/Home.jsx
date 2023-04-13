import "./home.css";
import Header from "../../components/Header/Header";
import Posts from "../../components/Posts/Posts";
// import Sidebar from "../../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation(); //to find out query params...

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        {/* <Sidebar /> */}
      </div>
    </>
  );
}

export default Home