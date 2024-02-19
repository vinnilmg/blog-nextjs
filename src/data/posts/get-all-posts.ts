import { POSTS_URL } from '../../config/app-config';
import { PostData, PostsResponse } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getAllPosts = async (): Promise<PostData[]> => {
  const posts = await fetchJson<PostsResponse>(POSTS_URL);
  return posts.data;
};
