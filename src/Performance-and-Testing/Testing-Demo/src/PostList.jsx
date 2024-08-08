import axios from "axios";
import { useEffect, useState } from "react";

export function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://example.com/api/posts")
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ol>
  );
}
