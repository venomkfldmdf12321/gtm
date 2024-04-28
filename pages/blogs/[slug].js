// pages/blogs/[slug].js

import fs from 'fs';
import path from 'path';

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), 'public', 'blogs');
  const fileNames = fs.readdirSync(postsDirectory);

  const paths = fileNames.map(fileName => ({
    params: {
      slug: fileName.replace(/\.html$/, ''),
    },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'public', 'blogs', `${slug}.html`);
  const content = fs.readFileSync(filePath, 'utf8');

  return {
    props: {
      content,
    },
  };
}

export default function BlogPost({ content }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}
