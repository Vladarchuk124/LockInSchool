import styles from "./Header.module.css";

function Header() {

    return (
        <header>
            <img src="logo.png" alt="header_logo" />
            <nav>
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
