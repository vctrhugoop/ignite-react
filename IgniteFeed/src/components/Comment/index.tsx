import { ThumbsUp, Trash } from "phosphor-react";
import { useEffect, useState } from "react";
import { Avatar } from "../Avatar";
import styles from "./Comment.module.css";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [userName, setUserName] = useState("");
  const [likeCount, setLikeCount] = useState(0);

  async function userNameRandom() {
    const response = await fetch("https://random-data-api.com/api/v2/users");

    const data = await response.json();

    setUserName(`${data.first_name} ${data.last_name}`);
  }

  useEffect(() => {
    userNameRandom();
  }, []);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
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
        <button className={styles.bntLike} onClick={handleLikeComment}>
          <ThumbsUp size={20} />
          Aplaudir<span>{likeCount}</span>
        </button>
      </div>
    </div>
  );
}
