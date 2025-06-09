import styles from "./OtherPriceCard.module.css"
import RegisterButton from "../RegisterButton/RegisterButton";

function OtherPriceCard({ lessonPrice, price }) {
    
    return (
        <div className={styles.otherPriceCard}>
            <img src='./emoji/pin.png' alt='emoji' className={styles.pinImg}></img>
            <div style={{ textAlign: "center" }}>
                <h1 style={{fontFamily: "Arial", fontWeight: "bold", fontSize: "35px", margin: "20px 20px 0 20px" }}>8 уроків</h1>
                <p style={{ padding: "0", margin: "0", marginBottom: "20px" }}>1 заняття - {lessonPrice} UAH</p>
            </div>
            <h2 style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "35px" }}>₴{price}</h2>
            <RegisterButton />
        </div>
    );
}

export default OtherPriceCard;
