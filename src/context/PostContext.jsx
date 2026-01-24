import { useEffect } from "react";
import { createContext, useState } from "react";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <PostContext.Provider value={{ posts, loading, error, fetchPosts }}>
      {children}
    </PostContext.Provider>
  );
}
export default PostContext;