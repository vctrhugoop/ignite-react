import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from '../Avatar';

export function Comment() {
  return (
    <div className={styles.container}>
      <Avatar hasBorder={false} src="https://i.pravatar.cc/" />
      <div className={styles.box}>
        <div className={styles.commentBox}>
          <div className={styles.commentAuthorTime}>
            <div className={styles.commentAuthor}>
              <strong>Jenny Wilson</strong>
              <time>Cerca de 2h atras</time>
            </div>
            <button>
              <Trash size={24} />
            </button>
          </div>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <button className={styles.bntLike}>
          <ThumbsUp size={20} />
          Aplaudir<span>20</span>
        </button>
      </div>
    </div>
  );
}
