const LabLayout = ({ children }) => {
    return (
        <div className="lab-layout">
            <a className="skip-link" href="#archive-content">
                Skip to active file
            </a>

            <header className="archive-header">
                <div className="archive-brand">
                    <span className="archive-mark" aria-hidden="true">
                        Y.
                    </span>
                    <div>
                        <p className="archive-eyebrow">
                            Future Gadget Laboratory
                        </p>
                        <p className="archive-name">
                            yubinex / personal archive
                        </p>
                    </div>
                </div>
                <div className="archive-worldline">
                    <p className="archive-eyebrow">World line</p>
                    <p className="worldline-value">1.048596</p>
                </div>
            </header>

            <nav className="file-navigation" aria-label="Archive files">
                <a
                    className="file-tab"
                    href="#archive-content"
                    aria-current="page"
                >
                    <span className="file-tab-number">001</span>
                    <span className="file-tab-name">Profile</span>
                    <span className="file-tab-state">Open</span>
                </a>
                <button className="file-tab" type="button" disabled>
                    <span className="file-tab-number">002</span>
                    <span className="file-tab-name">Experiments</span>
                    <span className="file-tab-state">Soon</span>
                </button>
                <button className="file-tab" type="button" disabled>
                    <span className="file-tab-number">003</span>
                    <span className="file-tab-name">Interests</span>
                    <span className="file-tab-state">Soon</span>
                </button>
            </nav>

            <main id="archive-content" tabIndex={-1}>
                {children}
            </main>

            <footer className="archive-footer">
                <p>El Psy Kongroo.</p>
                <span>Personal archive // End of file</span>
                <a href="https://github.com/yubinex">GitHub ↗</a>
            </footer>
        </div>
    );
};

export default LabLayout;
