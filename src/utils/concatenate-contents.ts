import { ContentData } from '../domain/posts/post';

export const concatenateContents = (contents: Array<ContentData>): string => {
  return contents.reduce((accumulator: string, content: ContentData) => {
    if (!content.children[0].text) return accumulator;
    return accumulator + `<p>${content.children[0].text.trim()}</p>`;
  }, '');
};
