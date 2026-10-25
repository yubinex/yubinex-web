import styles from "./FileFrame.module.css";

const FileFrame = ({ number, title, children }) => {
    const titleId = `file-${number}-title`;

    return (
        <article className={styles["file-frame"]} aria-labelledby={titleId}>
            <header className={styles["file-titlebar"]}>
                <h1 id={titleId}>{title}</h1>
                <div className={styles["file-title-meta"]}>
                    <span>File {number} // Public record</span>
                    <span className={styles["file-state"]}>Open</span>
                </div>
            </header>
            {children}
        </article>
    );
};

export default FileFrame;
