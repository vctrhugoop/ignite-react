import styles from './styles/App.module.css';

import { Header } from './components/Header';
import { Aside } from './components/Aside';
import Post from './components/Post';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Aside />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}
