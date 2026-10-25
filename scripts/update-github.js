import { mkdir, writeFile } from "node:fs/promises";

const updateGitHub = async () => {
    const headers = {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
    };

    // Optional locally; GitHub Actions can supply this when updates are automated.
    if (process.env.GITHUB_TOKEN) {
        headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch("https://api.github.com/users/yubinex", {
        headers,
        signal: AbortSignal.timeout(15000),
    });

    if (!response.ok) {
        throw new Error(
            `GitHub profile request failed (HTTP ${response.status}).`,
        );
    }

    const profile = await response.json();

    // Select public fields explicitly. The token is never written to the snapshot.
    const snapshot = {
        username: profile.login,
        avatarUrl: profile.avatar_url,
        profileUrl: profile.html_url,
        bio: profile.bio,
        createdAt: profile.created_at,
        publicRepos: profile.public_repos,
        followers: profile.followers,
    };

    const directory = new URL("../src/data/", import.meta.url);
    const destination = new URL("github.json", directory);

    // Fetch successfully before touching the existing snapshot.
    await mkdir(directory, { recursive: true });
    await writeFile(destination, `${JSON.stringify(snapshot, null, 4)}\n`);
    console.log("Updated src/data/github.json");
};

updateGitHub().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
});
