import styles from "./style.module.scss";
export type PostProps = {
    author: string;
    download_url: string;
    height: number;
    id: string;
    url: string;
    width: number;
};

function PostItem({ author, download_url, height, id, url, width }: PostProps) {
    return (
        <div>
            <img src={download_url} className={styles.thumbnail} />
            <p className={styles.author}>{author}</p>
        </div>
    );
}

export default PostItem;
