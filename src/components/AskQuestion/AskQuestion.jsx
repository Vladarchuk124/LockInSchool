import { useMediaQuery } from 'react-responsive';

function AskQuestion() {
    const isMobileWidth = useMediaQuery({ maxWidth: 1240 });

    const imgStyle = {
        display: isMobileWidth ? "none" : "",
        height: "800px",
        borderRadius: "14px",
        marginLeft: "15px"
    }


    return (
        <div style={{ display: "flex", justifyContent: "center", gap: "80px", minHeight: isMobileWidth ? "60dvh" : "100dvh" }}>
            <img src="questionPageImage.jpg" alt="questionImage" style={imgStyle} />
            <div style={{ marginTop: "100px", textAlign: isMobileWidth ? "center" : "" }}>
                <h1 style={{ color: "#1b3eb5", fontSize: isMobileWidth ? "35px" : "55px", margin: "0" }}>Залишилися питання?</h1>
                <p style={{ fontSize: isMobileWidth ? "15px" : "25px", margin: "0 0 30px" }}>Потрібна допомога з вибором навчання?</p>
                <h2 style={{ fontSize: isMobileWidth ? "25px" : "35px", fontFamily: "Montserrat", margin: "0" }}>Напиши нам у <a style={{ color: "black", cursor: "pointer", fontFamily: "Montserrat" }} href="https://t.me/arinavenher" target="_blanket">телеграм</a> </h2>
                <p style={{ fontSize: isMobileWidth ? "18px" : "25px", margin: "0" }}>Ми раді відповісти на усі твої питання!</p>
            </div>
        </div>
    );
}

export default AskQuestion;
