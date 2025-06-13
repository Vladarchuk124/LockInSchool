import styles from "./OtherPriceCard.module.css"
import RegisterButton from "../RegisterButton/RegisterButton";

function OtherPriceCard(props) {
    
    return (
        <div className={styles.otherPriceCard}>
            <img src='./emoji/pin.png' alt='emoji' className={styles.pinImg}></img>
            <div style={{ textAlign: "center" }}>
                <h1 style={{fontFamily: "Montserrat", fontWeight: "bold", fontSize: "40px", margin: "20px 20px 0 20px" }}>{props.lessonText}</h1>
                <p style={{ padding: "0", margin: "0", marginBottom: "20px", fontSize: "20px" }}>1 заняття - {props.lessonPrice} UAH</p>
            </div>
            <h2 style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "55px" }}>₴{props.price}</h2>
            <RegisterButton />
        </div>
    );
}

export default OtherPriceCard;
