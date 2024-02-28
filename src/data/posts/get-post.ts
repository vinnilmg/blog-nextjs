import { POSTS_URL } from '../../config/app-config';
import { PostData, PostsResponse } from '../../domain/posts/post';
import { fetchJson } from '../../utils/fetch-json';

export const getPost = async (slug: string | string[]): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}?populate=*&filters[slug]=${slugString}`;
  const jsonPosts = await fetchJson<PostsResponse>(url);
  return jsonPosts.data;
};
