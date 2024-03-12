import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
import { PostCover } from '../../components/PostCover';
import { PostData } from '../../domain/posts/post';
import { concatenateContents } from '../../utils/concatenate-contents';

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  return (
    <>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data.attributes.formats.large.url}
          alt={post.attributes.title}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: concatenateContents(post.attributes.content),
          }}
        />
      </MainContainer>
      <Footer />
    </>
  );
};