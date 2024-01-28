import styles from "./styles/App.module.css";

import { Aside } from "./components/Aside";
import { Header } from "./components/Header";
import { Post, PostProps } from "./components/Post";

interface Posts extends PostProps {
  id: number;
}

const posts: Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/vctrhugoop.png",
      name: "Victor Oliveira",
      role: "CEO @Awesome Software",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋 ",
      },
      {
        type: "paragraph",
        content:
          " Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "jane.design/doctorcare ",
      },
    ],
    publishedAt: new Date("2024-01-27 17:00:00"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Aside />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
