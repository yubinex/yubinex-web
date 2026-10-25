const FileFrame = ({ number, title, children }) => {
    const titleId = `file-${number}-title`;

    return (
        <article className="file-frame" aria-labelledby={titleId}>
            <header className="file-titlebar">
                <h1 id={titleId}>{title}</h1>
                <span>File {number} // Public record</span>
            </header>
            {children}
        </article>
    );
};

export default FileFrame;
