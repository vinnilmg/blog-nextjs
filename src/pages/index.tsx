import { GetStaticProps } from 'next';
import { PostData, PostsResponse } from '../domain/posts/post';

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch(
    'https://blog-strapi-455r.onrender.com/api/posts?populate=*',
  );

  const jsonPosts = (await posts.json()) as PostsResponse;
  return jsonPosts.data;
};

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return (
    <div>
      {posts.map((post) => (
        <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
