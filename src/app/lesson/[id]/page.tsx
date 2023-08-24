// 'use client' - для использования жизненого цикла
// компоненнта, хуков и других приемуществ React
import { usePosts } from '@/../store';
import { Metadata } from 'next';
import { useEffect } from 'react';

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getData(id);
  return {
    title: post.title,
  };
}

async function getData(id: string) {
  const response = await fetch(`https://63c47de98067b6bef6d9df3d.mockapi.io/items/${id}`, {
    next: {
      revalidate: 60,
    },
  });
  return response.json();
}

async function Post({ params: { id } }: Props) {
  const post = await getData(id);
  // console.log(post);

  return (
    <section>
      {/* Post {id} - Это динамическое называние которое указывается в ссылке, а так же в title. Аналог
      Outlet из React-router-dom. */}
      <h1>
        <b>{post.title}</b>
      </h1>
      {post.description}
    </section>
  );
}

export default Post;
