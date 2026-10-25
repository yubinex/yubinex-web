import styles from "./TransmissionFooter.module.css";

const TransmissionFooter = ({ worldline }) => {
    return (
        <footer className={styles["archive-footer"]}>
            <div className={styles.transmission}>
                <svg
                    className={styles["transmission-line"]}
                    viewBox="0 0 160 2"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path d="M160 1H0" pathLength="1" />
                </svg>

                <p className={styles["transmission-quote"]}>
                    <span className="visually-hidden">El Psy Kongroo.</span>
                    <span
                        className={styles["transmission-text"]}
                        aria-hidden="true"
                    >
                        El Psy Kongroo.
                    </span>
                </p>

                <svg
                    className={styles["transmission-line"]}
                    viewBox="0 0 160 2"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <path d="M0 1H160" pathLength="1" />
                </svg>
            </div>

            <div className={styles["transmission-meta"]}>
                <p>Transmission end // World line {worldline}</p>
                <a href="https://github.com/yubinex">GitHub ↗</a>
            </div>
        </footer>
    );
};

export default TransmissionFooter;
