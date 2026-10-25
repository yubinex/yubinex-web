import github from "../data/github.json";
import FileFrame from "../components/FileFrame.jsx";
import GlitchText from "../components/GlitchText.jsx";
import styles from "./ProfileFile.module.css";

// Personal choices stay separate from the generated GitHub snapshot.
const INTERESTS = [
    "Formula 1",
    "World Endurance Championship (WEC)",
    "Anime",
    "Gaming",
    "Space",
    "Programming",
];
const TOOLKIT = [
    "C",
    "Python",
    "JavaScript",
    "HTML",
    "CSS",
    "Bash",
    "React",
    "Linux",
];

const ProfileFile = () => {
    const memberSince = new Intl.DateTimeFormat("en", {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(github.createdAt));

    return (
        <FileFrame number="001" title="Personnel dossier">
            <div className={styles["profile-body"]}>
                <div className={styles["profile-identity"]}>
                    <p className={styles["profile-label"]}>Identification</p>
                    <img
                        className={styles["profile-avatar"]}
                        src={github.avatarUrl}
                        alt=""
                        width="80"
                        height="80"
                    />
                    <div>
                        <h2 className={styles["profile-label"]}>Operator</h2>
                        <p className={styles["profile-username"]}>
                            <GlitchText text={github.username} />
                        </p>
                    </div>
                    <dl className={styles["profile-identity-data"]}>
                        <div>
                            <dt>Based in</dt>
                            <dd>
                                <span aria-hidden="true">🇩🇪</span> Germany
                            </dd>
                        </div>
                        <div>
                            <dt>Member since</dt>
                            <dd>{memberSince}</dd>
                        </div>
                    </dl>
                </div>

                <div className={styles["profile-observation"]}>
                    <p className={styles["profile-command"]}>
                        $ ./labmem --observe {github.username}
                    </p>
                    <p className={styles["profile-bio"]}>
                        I'm yubinex. I work with C, Python, and web
                        technologies, with Linux and Bash as part of my everyday
                        toolkit. This archive is a home for my projects and the
                        things I'm exploring.
                    </p>

                    <div className={styles["profile-details"]}>
                        <section className={styles["profile-detail-row"]}>
                            <h2 className={styles["profile-label"]}>
                                Interests
                            </h2>
                            <ul className={styles["interests-list"]}>
                                {INTERESTS.map((interest) => (
                                    <li key={interest}>{interest}</li>
                                ))}
                            </ul>
                        </section>

                        <section className={styles["profile-detail-row"]}>
                            <h2 className={styles["profile-label"]}>
                                Lab toolkit
                            </h2>
                            <ul className={styles["toolkit-list"]}>
                                {TOOLKIT.map((tool) => (
                                    <li key={tool}>{tool}</li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <section className={styles["profile-record"]}>
                        <h2 className={styles["profile-label"]}>
                            GitHub record
                        </h2>
                        <dl>
                            <div>
                                <dt>Public repositories</dt>
                                <dd>{github.publicRepos}</dd>
                            </div>
                            <div>
                                <dt>Followers</dt>
                                <dd>{github.followers}</dd>
                            </div>
                        </dl>
                        <a href={github.profileUrl}>View GitHub profile ↗</a>
                    </section>
                </div>
            </div>
        </FileFrame>
    );
};

export default ProfileFile;
