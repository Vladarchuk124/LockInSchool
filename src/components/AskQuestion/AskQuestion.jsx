
function AskQuestion () {
    const imgStyle = {
        height: "800px",
        borderRadius: "14px"
    }


    return (
        <div style={{display: "flex", justifyContent: "center", gap: "150px", minHeight: "100dvh"}}>
            <img src="./dog.jpg" alt="dogImage" style={imgStyle}/>
            <div style={{marginTop: "100px"}}>
                <h1 style={{color: "#1b3eb5", fontSize: "55px"}}>Залишилися питання?</h1>
                <p style={{fontSize: "25px"}}>Потрібна допомога з вибором навчання?</p>
                <h2 style={{fontSize: "35px"}}>Напиши нам у <a style={{color: "black", cursor: "pointer"}} href="https://t.me/arinavenher" target="_blanket">телеграм</a> </h2>
                <p style={{fontSize: "25px"}}>Ми раді відповісти на усі твої питання!</p>
            </div>
        </div>
    );
}

export default AskQuestion;
