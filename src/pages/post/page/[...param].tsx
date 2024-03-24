import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import HomePage from '../../../containers/HomePage';
import { countAllPosts } from '../../../data/posts/count-all-posts';
import { getAllPosts } from '../../../data/posts/get-all-posts';
import { PaginationData } from '../../../domain/posts/pagination';
import { PostData } from '../../../domain/posts/post';

export type PageProps = {
  posts: PostData[];
  category?: string;
  pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
  const router = useRouter();

  if (router.isFallback) return <div>Carregando...</div>;
  if (!posts.length) return <div>Página não encontrada...</div>;

  return <HomePage posts={posts} category={category} pagination={pagination} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  // Pega o número da página da URL
  const page = Number(ctx.params.param[0]);

  // Pega a categoria da URL se existir
  const category = ctx.params.param[1] || '';

  const nextPage = page + 1;
  const previousPage = page - 1;
  const postsPerPage = 3;
  const startFrom = previousPage * postsPerPage;

  // Montagem da URL
  const categoryQuery = category
    ? `filters[category][name][$containsi]=${category}`
    : '';

  const urlQuery = `sort=id:desc&pagination[start]=${startFrom}&pagination[limit]=${postsPerPage}&${categoryQuery}`;

  // Chamadas
  const posts = await getAllPosts(urlQuery);
  const numberOfPosts = Number(await countAllPosts(categoryQuery));

  const pagination: PaginationData = {
    nextPage,
    previousPage,
    numberOfPosts,
    postsPerPage,
    category,
  };

  return {
    props: { posts, pagination, category },
    revalidate: 60,
  };
};
