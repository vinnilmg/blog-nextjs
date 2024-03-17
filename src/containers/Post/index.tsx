import Head from 'next/head';
import { Comments } from '../../components/Comments';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import { PostCover } from '../../components/PostCover';
import { PostDetails } from '../../components/PostDetails';
import { SITE_NAME } from '../../config/app-config';
import { PostData } from '../../domain/posts/post';
import { concatenateContents } from '../../utils/concatenate-contents';
import { removeHtml } from '../../utils/remove-html';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const fullContent = concatenateContents(post.attributes.content);
  return (
    <>
      <Head>
        <title>
          {post.attributes.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(fullContent).slice(0, 150)}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>

        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.small.url}
          alt={post.attributes.title}
        />

        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        />

        <PostContainer content={fullContent} />
        <Comments slug={post.attributes.slug} title={post.attributes.title} />
      </MainContainer>
      <Footer />
    </>
  );
};
