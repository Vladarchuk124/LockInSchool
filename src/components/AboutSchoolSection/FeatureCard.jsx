import styles from "./FeatureCard.module.css";

function FeatureCard({ cardColor, cardSide, imgSource, imgClass, titleText, defaultText}) {
    return (
        <div className={`${styles.featureCard} ${styles[cardColor]} ${styles[cardSide]}`}>
            <img src={imgSource} alt="emoji" className={styles[imgClass]}></img>
            <p><strong>{titleText}</strong> {defaultText}</p>
            <p></p>
        </div>
    );
}

export default FeatureCard;
