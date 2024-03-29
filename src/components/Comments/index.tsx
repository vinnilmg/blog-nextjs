import { Container } from './styles';
import { DiscussionEmbed } from 'disqus-react';
import { DISQUS_BLOG_SHORTNAME, SITE_URL } from '../../config/app-config';

export type CommentsProps = {
  slug: string;
  title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
  return (
    <Container>
      <DiscussionEmbed
        shortname={DISQUS_BLOG_SHORTNAME}
        config={{
          url: `${SITE_URL}/post/${slug}`,
          identifier: slug,
          title: title,
          language: 'pt_BR',
        }}
      />
    </Container>
  );
};
