import { useEffect, useState } from "react";

function PlanNameTablet({ planNameText }) {
    const [fontSize, setFontSize] = useState("58px");

    useEffect(() => {
        const handleResize = () => {
            setFontSize(window.innerWidth <= 625 ? "32px" : "58px");
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const tabletStyle = {
        fontSize,
        backgroundColor: "#3a6ef8",
        fontFamily: "Montserrat",
        color: "white",
        fontWeight: "bold",
        width: "100%",
        textAlign: "center",
        marginBottom: "80px",
        paddingBottom: "5px",
    }

    return (
        <div style={tabletStyle}>{planNameText}</div>
    );
}

export default PlanNameTablet;
