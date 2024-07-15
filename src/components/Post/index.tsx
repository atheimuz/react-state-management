import { useState } from "react";
import { useGetPostList, usePostList } from "../../hooks/queries/usePost";

function Posts() {
    const [index, setIndex] = useState(0);
    const { data: postList } = useGetPostList({ skip: index, limit: 10 });
    const test = usePostList();

    return (
        <div>
            <ul>
                {postList?.map((post: { id: number; title: string }) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>

            <button
                disabled={index === 0}
                onClick={() => {
                    setIndex(index - 1);
                }}
            >
                이전
            </button>

            {index + 1}

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
