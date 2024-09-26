import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';

export default function Home({ posts }) {
  const [theme, setTheme] = useState('light');

  return (
    <div className={theme}>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
      <h1>Dynamic Blog Platform</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.attributes.slug}`}>
              <a>{post.attributes.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await axios.get('http://localhost:1337/api/posts');
  const posts = res.data.data;

  return {
    props: { posts }, 
  };
}
