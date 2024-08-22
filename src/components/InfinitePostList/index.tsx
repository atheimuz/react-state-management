import React from "react";
import { useProductInfiniteQuery } from "../../hooks/queries/useProductQuery";
import styles from "./style.module.scss";
import PostItem, { PostProps } from "../PostItem";

function Posts() {
    const { data: postList, fetchNextPage } = useProductInfiniteQuery({
        limit: 10,
    });

    return (
        <div>
            <ul className={styles.items}>
                {postList?.pages?.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.map((post: PostProps) => (
                            <li key={post.id} className={styles.item}>
                                <PostItem {...post} />
                            </li>
                        ))}
                    </React.Fragment>
                ))}
            </ul>
            <button onClick={() => fetchNextPage()}>다음</button>
        </div>
    );
}

export default Posts;
