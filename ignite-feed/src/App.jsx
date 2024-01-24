import styles from './styles/App.module.css';

import { Header } from './components/Header';
import { Aside } from './components/Aside';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Aside />
        <div>oi</div>
      </div>
    </div>
  );
}
