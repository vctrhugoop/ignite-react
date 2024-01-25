import { Avatar } from '../Avatar';
import styles from './Aside.module.css';
import { PencilSimpleLine } from 'phosphor-react';

export function Aside() {
  return (
    <aside className={styles.container}>
      <img className={styles.cover} src="https://encurtador.com.br/irvI2" />
      <div className={styles.profile}>
        <Avatar hasBorder src="https:github.com/vctrhugoop.png" />
        <strong>Victor Oliveira</strong>
        <span>Software Engineer</span>
      </div>
      <footer className={styles.buttonEdit}>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
