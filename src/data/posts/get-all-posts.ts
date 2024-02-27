import { POSTS_URL } from '../../config/app-config';
import { PostData, PostsResponse } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (query = ''): Promise<PostData[]> => {
  const url = `${POSTS_URL}?populate=*&${query}`;
  const posts = await fetchJson<PostsResponse>(url);
  return posts.data;
};
