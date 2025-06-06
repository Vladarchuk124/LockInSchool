import RegisterButton from "../RegisterButton/RegisterButton";

function OtherPriceCard({ lessonPrice, price }) {

    const cardStyle = {
        display: "flex",
        flexDirection: "row",
        position: "relative",
        backgroundColor: "white",
        border: "2px solid #3a6ef8",
        borderRadius: "36px",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        padding: "20px 50px 20px 50px",
        gap: "50px",
        marginBottom: "100px"
    }

    const pinImgStyle = {
        position: "absolute",
        top: "-20px",
        left: "610px",
        height: "70px",
        transform: "rotate(-10deg)"
    }

    return (
        <div style={cardStyle}>
            <img src='./emoji/pin.png' alt='emoji' style={pinImgStyle}></img>
            <div style={{ textAlign: "center" }}>
                <h1 style={{ fontWeight: "bold", fontSize: "35px", margin: "20px 20px 0 20px" }}>8 уроків</h1>
                <p style={{ padding: "0", margin: "0", marginBottom: "20px" }}>1 заняття - {lessonPrice} UAH</p>
            </div>
            <h2 style={{ fontWeight: "bold", fontSize: "35px" }}>₴{price}</h2>
            <RegisterButton />
        </div>
    );
}

export default OtherPriceCard;
