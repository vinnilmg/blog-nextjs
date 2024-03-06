export type PostID = number;

export type TextData = {
  text: string;
  type: string;
};

export type ContentData = {
  type: string;
  children: Array<TextData>;
};

export type PostAuthor = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostCategory = {
  id: PostID;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

export type PostCreatedBy = {
  id: PostID;
  firstname: string;
  lastname: string;
  username: null;
};

export type PostCoverFormat = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
};

export type PostCover = PostCoverFormat & {
  data: {
    id: PostID;
    attributes: {
      alternativeText: string;
      caption: string;
      previewUrl: null;
      provider: string;
      created_by: number;
      updated_by: number;
      created_at: string;
      updated_at: string;
      formats: {
        thumbnail: PostCoverFormat;
        small: PostCoverFormat;
        medium: PostCoverFormat;
        large: PostCoverFormat;
      };
    };
  };
};

export type PostData = {
  id: PostID;
  attributes: {
    title: string;
    content: Array<ContentData>;
    slug: string;
    author: PostAuthor;
    category: PostCategory;
    created_by: PostCreatedBy;
    updated_by: PostCreatedBy;
    created_at: string;
    updated_at: string;
    cover: PostCover;
  };
};

export type PostsResponse = {
  data: PostData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};
