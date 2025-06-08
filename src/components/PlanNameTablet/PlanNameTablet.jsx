
function PlanNameTablet({planNameText}) {
    const tabletStyle = {
        fontSize: "58px",
        backgroundColor: "#3a6ef8",
        color: "white",
        fontWeight: "bold",
        width: "100%",
        textAlign: "center",
        marginBottom: "80px",
    }

    return (
        <div style={tabletStyle}>{planNameText}</div>
    );
}

export default PlanNameTablet;
