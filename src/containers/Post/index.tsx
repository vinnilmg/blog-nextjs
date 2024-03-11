import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { MainContainer } from '../../components/MainContainer';
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
