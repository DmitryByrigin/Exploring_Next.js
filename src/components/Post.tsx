'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { usePosts } from '@/../store';

const Posts = () => {
  const [posts, getAllPosts] = usePosts((state) => [state.posts, state.getAllPosts]);

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <section>
      <h1>Пример получения данных с сервера с промижутком в час</h1>
      {posts.map((item: any) => (
        <article key={item.id} className="grid grid-flow-row grid-cols-2 text-left">
          <Link href={`/lesson/${item.id}`}>
            <p className="hover:underline">{item.title}</p>
          </Link>
          <p className="text-right">{item.price}</p>
        </article>
      ))}
    </section>
  );
};

export { Posts };
