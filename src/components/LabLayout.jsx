import DivergenceMeter from "./DivergenceMeter.jsx";
import TransmissionFooter from "./TransmissionFooter.jsx";
import styles from "./LabLayout.module.css";

const LabLayout = ({ children }) => {
    const worldline = "1.048596";

    return (
        <div className={styles["lab-layout"]}>
            <a className={styles["skip-link"]} href="#archive-content">
                Skip to active file
            </a>

            <header className={styles["archive-header"]}>
                <div className={styles["archive-brand"]}>
                    <span className={styles["archive-mark"]} aria-hidden="true">
                        Y.
                    </span>
                    <div>
                        <p className={styles["archive-eyebrow"]}>
                            Future Gadget Laboratory
                        </p>
                        <p className={styles["archive-name"]}>
                            yubinex / personal archive
                        </p>
                    </div>
                </div>
                <div className={styles["archive-worldline"]}>
                    <p className={styles["archive-eyebrow"]}>World line</p>
                    <DivergenceMeter value={worldline} />
                </div>
            </header>

            <nav
                className={styles["file-navigation"]}
                aria-label="Archive files"
            >
                <a
                    className={styles["file-tab"]}
                    href="#archive-content"
                    aria-current="page"
                >
                    <span className={styles["file-tab-number"]}>001</span>
                    <span>Profile</span>
                    <span className={styles["file-tab-state"]}>Open</span>
                </a>
                <button className={styles["file-tab"]} type="button" disabled>
                    <span className={styles["file-tab-number"]}>002</span>
                    <span>Experiments</span>
                    <span className={styles["file-tab-state"]}>Soon</span>
                </button>
                <button className={styles["file-tab"]} type="button" disabled>
                    <span className={styles["file-tab-number"]}>003</span>
                    <span>Interests</span>
                    <span className={styles["file-tab-state"]}>Soon</span>
                </button>
            </nav>

            <main id="archive-content" tabIndex={-1}>
                {children}
            </main>

            <TransmissionFooter worldline={worldline} />
        </div>
    );
};

export default LabLayout;
