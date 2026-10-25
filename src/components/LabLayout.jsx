function LabLayout({ children }) {
    return (
        <div className="lab-layout">
            <header>Future Gadget Laboratory — yubinex</header>

            <nav>001 Profile · 002 Projects · 003 Interests</nav>

            <main>{children}</main>

            <footer>El Psy Kongroo.</footer>
        </div>
    );
}

export default LabLayout;
