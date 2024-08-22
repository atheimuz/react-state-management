import { useState } from "react";
import { useProductQuery } from "../../hooks/queries/useProductQuery";
import styles from "./style.module.scss";
import PostItem from "../PostItem";

function Posts() {
    const [index, setIndex] = useState(1);
    const { data: postList } = useProductQuery({ page: index, limit: 10 });

    return (
        <div>
            <ul className={styles.items}>
                {postList?.map((post) => (
                    <li key={post.id} className={styles.item}>
                        <PostItem {...post} />
                    </li>
                ))}
            </ul>

            <button
                disabled={index === 1}
                onClick={() => {
                    setIndex(index - 1);
                }}
            >
                이전
            </button>

            {index}

            <button
                onClick={() => {
                    setIndex(index + 1);
                }}
            >
                다음
            </button>
        </div>
    );
}

export default Posts;
