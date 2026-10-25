import github from "../data/github.json";
import FileFrame from "./FileFrame";

const ProfileFile = () => {
    const memberSince = new Intl.DateTimeFormat("en", {
        month: "long",
        year: "numeric",
        timeZone: "UTC",
    }).format(new Date(github.createdAt));

    return (
        <FileFrame number="001" title="Personnel dossier">
            <div className="profile-body">
                <div className="profile-identity">
                    <p className="profile-label">Identification</p>
                    <img
                        className="profile-avatar"
                        src={github.avatarUrl}
                        alt=""
                        width="80"
                        height="80"
                    />
                    <div>
                        <h2 className="profile-label">Operator</h2>
                        <p className="profile-username">{github.username}</p>
                    </div>
                    <dl className="profile-identity-data">
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

                <div className="profile-observation">
                    <p className="profile-command">
                        $ ./labmem --observe {github.username}
                    </p>
                    <p className="profile-bio">
                        I'm yubinex. I work with C, Python, and web
                        technologies, with Linux and Bash as part of my everyday
                        toolkit. This archive is a home for my projects and the
                        things I'm exploring.
                    </p>

                    <div className="profile-details">
                        <section className="profile-detail-row">
                            <h2 className="profile-label">Interests</h2>
                            <ul className="interests-list">
                                <li>Formula 1</li>
                                <li>World Endurance Championship (WEC)</li>
                                <li>Anime</li>
                                <li>Gaming</li>
                                <li>Space</li>
                                <li>Programming</li>
                            </ul>
                        </section>

                        <section className="profile-detail-row">
                            <h2 className="profile-label">Lab toolkit</h2>
                            <ul className="toolkit-list">
                                <li>C</li>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bash</li>
                                <li>React</li>
                                <li>Linux</li>
                            </ul>
                        </section>
                    </div>

                    <section className="profile-record">
                        <h2 className="profile-label">GitHub record</h2>
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
