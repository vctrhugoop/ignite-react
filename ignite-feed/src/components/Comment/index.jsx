import { ThumbsUp, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [userName, setUserName] = useState("");

  async function userNameRandom() {
    const response = await fetch("https://random-data-api.com/api/v2/users");

    const data = await response.json();

    setUserName([`${data.first_name} ${data.last_name}`]);
  }

  useEffect(() => {
    userNameRandom();
  }, []);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.container}>
      <Avatar hasBorder={false} src="https://i.pravatar.cc/" />
      <div className={styles.box}>
        <div className={styles.commentBox}>
          <div className={styles.commentAuthorTime}>
            <div className={styles.commentAuthor}>
              <strong>{userName}</strong>
              <time>Cerca de 2h atras</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentario">
              <Trash size={24} />
            </button>
          </div>
          <p>{content}</p>
        </div>
        <button className={styles.bntLike}>
          <ThumbsUp size={20} />
          Aplaudir<span>20</span>
        </button>
      </div>
    </div>
  );
}
