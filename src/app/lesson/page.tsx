import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NEXT.JS LESSONS',
};

async function getData() {
  const response = await fetch('https://63c47de98067b6bef6d9df3d.mockapi.io/items', {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw new Error('Не удалось получить данные с сервера!');

  return response.json();
}

async function Blog() {
  const posts = await getData();
  // console.log(posts);

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
}

export default Blog;
