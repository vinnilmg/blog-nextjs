import Head from 'next/head';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { PostCard } from '../../components/PostCard';
import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Blog criado no curso de JS" />
      </Head>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={post.attributes.cover.data.attributes.formats.small.url}
              slug={post.attributes.slug}
              title={post.attributes.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}
