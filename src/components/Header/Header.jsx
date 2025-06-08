import styles from "./Header.module.css";
import { useState, useEffect } from "react";

function Header() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 990);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const mobile = window.innerWidth < 990;
            setIsMobile(mobile);
            if (!mobile) setMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        if (isMobile) setMenuOpen((prev) => !prev);
    };

    return (
        <header>
            <img src="LockInSchool/logo.png" alt="header_logo" onClick={toggleMenu} />
            <nav className={`${styles.dropdown} ${menuOpen ? styles.show : ''}`}>
                <ul>
                    <li><a href="#about">Про школу</a></li>
                    <li><a href="#courses">Курси</a></li>
                    <li><a href="#prices">Тарифи</a></li>
                    <li><a href="#reviews">Відгуки</a></li>
                    <li><a href="#faq">Часті питання</a></li>
                </ul>
            </nav>
            <div className={styles.recordButton}>Записатися на навчання</div>
        </header>
    )
}

export default Header;
