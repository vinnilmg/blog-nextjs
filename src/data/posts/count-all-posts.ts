import { POSTS_URL } from '../../config/app-config';
import { PostsResponse } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (query?: string): Promise<number> => {
  const urlQuery = query ? `${POSTS_URL}?${query}` : POSTS_URL;
  const posts = await fetchJson<PostsResponse>(urlQuery);
  return posts.meta?.pagination?.total;
};
