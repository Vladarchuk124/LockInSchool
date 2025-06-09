import styles from "./PriceCard.module.css";
import RegisterButton from "../RegisterButton/RegisterButton";

function PriceCard({ lessonCount, discount, lessonsNum, lessonPrice, priceWithoutSale, currentPrice, validDaysNum }) {
    return (
        <div className={`${styles.priceCard} ${styles[lessonCount]}`}>
            {discount && <div className={styles.Discount}>{discount}</div>}
            <img src='./emoji/pin.png' alt='emoji' className={styles.pinImg}></img>
            <h3>{lessonsNum} {(lessonsNum === "32") ? "уроки" : "уроків"}</h3>
            <p>1 заняття - {lessonPrice} UAH</p>
            <h2>₴{priceWithoutSale}</h2>
            <h3 style={{ marginBottom: "10px", fontSize: "36px" }}>₴{currentPrice}</h3>
            <RegisterButton />
            <p style={{ marginBottom: "10px" }}>Термін дії пакету - {validDaysNum} днів</p>
        </div>

    );
}

export default PriceCard;
