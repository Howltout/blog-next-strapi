import axios from 'axios';
import ThemeSwitcher from '../../components/ThemeSwitcher';
import { useState } from 'react';

const BlogPost = ({ post }) => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme}>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <h1>{post.attributes.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;
  const res = await axios.get(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`);
  const post = res.data.data[0];

  return {
    props: { post },
  };
}

export default BlogPost;
