import { devtools, persist } from 'zustand/middleware';
import { create } from 'zustand';
// import { createJSONStorage } from 'zustand/middleware';
import { getAllPosts, getPostsBySearch } from '../services/getPosts';

type UsePosts = {
  posts: any[];
  getAllPosts: () => Promise<void>;
  getPostsBySearch: (value: string) => Promise<void>;
};

export const usePosts = create<UsePosts>()(
  devtools((set, get) => ({
    posts: [],
    getAllPosts: async () => {
      const posts = await getAllPosts();
      set({ posts });
    },
    getPostsBySearch: async (search) => {
      const posts = await getPostsBySearch(search);
      set({ posts });
    },
  })),
);
export { getAllPosts };
