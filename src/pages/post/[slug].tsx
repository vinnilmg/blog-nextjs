import { useRouter } from 'next/router';
import Error from 'next/error';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Post } from '../../containers/Post';
import { countAllPosts } from '../../data/posts/count-all-posts';
import { getAllPosts } from '../../data/posts/get-all-posts';
import { getPost } from '../../data/posts/get-post';
import { PostData } from '../../domain/posts/post';

export type DynamicPostProps = {
  post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
  const router = useRouter();

  // Com fallback true, a página que "não existe" é revalidada e o processo carrega se existir
  if (router.isFallback) {
    return <div>Página ainda carregando, por favor aguarde!</div>;
  }

  if (!post) {
    return <Error statusCode={404} />;
  }

  return <Post post={post} />;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(`pagination[limit]=${numberOfPosts}`);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.attributes.slug,
        },
      };
    }),
    // fallback false: Retorna a pagina 404 caso nao encontre a pagina estática do post
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const posts = await getPost(ctx.params.slug);
  return {
    props: { post: posts[0] },
    revalidate: 60,
  };
};
