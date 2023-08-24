export const getAllPosts = async () => {
  const response = await fetch('https://63c47de98067b6bef6d9df3d.mockapi.io/items');

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(
    `https://63c47de98067b6bef6d9df3d.mockapi.io/items?search=${search}`,
  );

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};
