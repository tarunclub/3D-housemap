import { useState } from 'react';
import { useEffect } from 'react';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import Post from './Post';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    () =>
      onSnapshot(
        query(getDocs(collection(db, 'posts')), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [db]);

  return (
    <div>
      {posts.map((post) => {
        <Post
          key={post.key}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          desc={post.data().description}
        />;
      })}
    </div>
  );
}

export default Posts;
