import styles from "./Footer.module.css";

const socialLists = [
    { href: "https://t.me/arinavenher", imgSrc: "LockInSchool/socialNetworks/tgLogo.png" },
    { href: "https://www.instagram.com/lockin.school?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", imgSrc: "LockInSchool/socialNetworks/instaLogo.png" },
    { href: "#", imgSrc: "LockInSchool/socialNetworks/tiktokLogo.png" },
    { href: "mailto:arinavenger.ua@gmail.com", imgSrc: "LockInSchool/socialNetworks/emailLogo.png" }
];

function Footer() {
    return (
        <footer>
            <div className={styles.socialNetworks}>
                {socialLists.map((link, index) => (
                    <a key={index} href={link.href} target="_blanket" rel="noopener noreferrer">
                        <img src={link.imgSrc} alt="socialNetworkLogo" />
                    </a>
                ))}
            </div>
            <div className={styles.upperPart}>
                <a href="#"><img src="LockInSchool/footerLogo.png" alt="footerLogo" className={styles.footerLogo}/></a>
                <nav>
                    <ul>
                        <li><a href="#about">Про школу</a></li>
                        <li><a href="#courses">Курси</a></li>
                        <li><a href="#prices">Тарифи</a></li>
                        <li><a href="#reviews">Відгуки</a></li>
                        <li><a href="#faq">Часті питання</a></li>
                    </ul>
                </nav>
            </div>
            <div className={styles.lowerPart}>
                <h1>&copy;2025 All rights reserved.</h1>
                <h1>Політика Конфіденційності</h1>
            </div>
        </footer>
    );
}

export default Footer;
