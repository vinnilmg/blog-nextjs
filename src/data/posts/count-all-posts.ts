import { POSTS_URL } from '../../config/app-config';
import { PostsResponse } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const countAllPosts = async (): Promise<number> => {
  const posts = await fetchJson<PostsResponse>(POSTS_URL);
  return posts.meta?.pagination?.total;
};
