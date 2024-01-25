import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import styles from './Post.module.css';

function Post() {
  return (
    <article className={styles.container}>
      <header className={styles.header}>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/vctrhugoop.png" />
          <div className={styles.info}>
            <strong>Victor Oliveira</strong>
            <span>Software Engineer</span>
          </div>
        </div>
        <time>Públicado há 1h</time>
      </header>
      <section className={styles.content}>
        <p>Fala galeraa 👋 </p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="#">👉 jane.design/doctorcare </a>
        </p>
        <p>
          <a href="#">#novoprojeto</a>
          <a href="#">#nlw</a>
          <a href="#">#rocketseat</a>
        </p>
      </section>
      <form className={styles.contentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <div>
          <button type="submit">Publicar</button>
        </div>
      </form>
      <div>
        <Comment />
      </div>
    </article>
  );
}

export default Post;
