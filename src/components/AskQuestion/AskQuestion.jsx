import { useMediaQuery } from 'react-responsive';

function AskQuestion () {
    const isTabletWidth = useMediaQuery({ maxWidth: 1350});
    const isMobileWidth = useMediaQuery({ maxWidth: 1240});

    const imgStyle = {
        display: isMobileWidth? "none" : "",
        height: "800px",
        borderRadius: "14px",
        marginLeft: "15px"
    }


    return (
        <div style={{display: "flex", justifyContent: "center", gap: isTabletWidth? "80px" : "150px", minHeight: "100dvh"}}>
            <img src="./dog.jpg" alt="dogImage" style={imgStyle}/>
            <div style={{marginTop: "100px", textAlign: isMobileWidth? "center" : ""}}>
                <h1 style={{color: "#1b3eb5", fontSize: "55px"}}>Залишилися питання?</h1>
                <p style={{fontSize: "25px"}}>Потрібна допомога з вибором навчання?</p>
                <h2 style={{fontSize: "35px", fontFamily: "Montserrat"}}>Напиши нам у <a style={{color: "black", cursor: "pointer", fontFamily: "Montserrat"}} href="https://t.me/arinavenher" target="_blanket">телеграм</a> </h2>
                <p style={{fontSize: "25px"}}>Ми раді відповісти на усі твої питання!</p>
            </div>
        </div>
    );
}

export default AskQuestion;
