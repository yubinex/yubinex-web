import github from "../data/github.json";

const ProfileFile = () => {
    return (
        <>
            <h1>001 — {github.username}</h1>
            <div className="profile-layout">
                <div className="profile-identity">
                    <img
                        src={github.avatarUrl}
                        alt=""
                        width="120"
                        height="120"
                    />
                    <p>{github.username}</p>
                </div>

                <section className="profile-details">
                    <h2>Observation record</h2>
                    <dl>
                        <dt>Public repositories</dt>
                        <dd>{github.publicRepos}</dd>

                        <dt>Followers</dt>
                        <dd>{github.followers}</dd>
                    </dl>
                </section>
            </div>
        </>
    );
};

export default ProfileFile;
