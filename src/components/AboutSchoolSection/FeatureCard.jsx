import styles from "./FeatureCard.module.css";

function FeatureCard({ cardColor, cardSide, imgSource, imgClass, titleText, defaultText, extraText }) {
    return (
        <div className={`${styles.featureCard} ${styles[cardColor]} ${styles[cardSide]}`}>
            <img src={imgSource} alt="emoji" className={styles[imgClass]}></img>
            <strong>{titleText}</strong> {extraText && <span>{extraText}</span>}
            <p>{defaultText}</p>
        </div>
    );
}

export default FeatureCard;
