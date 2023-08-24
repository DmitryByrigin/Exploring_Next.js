'use client';

import { usePosts } from '@/../store';
import { useState, FormEventHandler, useEffect } from 'react';
import styles from './Header/header.module.css';
// import { usePathname } from 'next/navigation';

const PostSearch = () => {
  // const pathname = usePathname();
  const [search, setSearch] = useState('');
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getPostsBySearch(search);
    }, 500);
    return () => clearTimeout(timeoutId);
  }, [search, getPostsBySearch]);

  const handelSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    await getPostsBySearch(search);
  };
  console.log(search);
  return (
    <form onSubmit={handelSubmit}>
      <input
        className="border py-1 px-3 text-black outline-none"
        type="search"
        placeholder="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className={`${styles.menu_item_styles} uppercase`} type="submit">
        ПОИСК
      </button>
    </form>
  );
};

export { PostSearch };
