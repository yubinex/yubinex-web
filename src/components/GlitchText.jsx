import styles from "./GlitchText.module.css";

const GlitchText = ({ text }) => {
    return (
        <>
            <span className="visually-hidden">{text}</span>
            <span
                className={styles["glitch-text"]}
                data-text={text}
                aria-hidden="true"
            >
                {text}
            </span>
        </>
    );
};

export default GlitchText;
