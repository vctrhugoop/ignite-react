import styles from './Header.module.css';
import logo from '../../assets/Ignite simbol.svg';

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logo} alt="Logo Ignite Feed" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
