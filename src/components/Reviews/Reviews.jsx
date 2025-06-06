import ImageSection from "./ImageSection";

function Reviews() {
    const textEmojiStyle = {
        position: "absolute",
        height: "300px",
        right: "250px",
        top: "-30px",
        transform: "rotate(20deg)"
    }

    const upperPartStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        marginBottom: "30px"
    }

    const lowerPartStyle = {
        display: "flex",
        flexDirection: "row",
        gap: "50px",
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    }

    return (
        <div style={{ minHeight: "100dvh" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", position: "relative" }}>
                <h1 style={{ color: "#1b3eb5", fontSize: "100px" }}>Відгуки наших учнів</h1>
                <img src="./emoji/emoji4.png" alt="emoji" style={textEmojiStyle} />
            </div>
            <div style={upperPartStyle}>

                <ImageSection
                    emojiSource="./emoji/starEyes.png"
                    reviewSource="./Reviews/rev1.png"
                    emojiPos="upperEmoji"
                />
                <ImageSection
                    emojiSource="./emoji/group.png"
                    reviewSource="./Reviews/rev2.png"
                    emojiPos="upperEmoji"
                />
                <ImageSection
                    reviewSource="./Reviews/rev3.png"
                    emojiPos="upperEmoji"
                />
            </div>
            <div style={lowerPartStyle}>
                <ImageSection
                    emojiSource="./emoji/rocket.png"
                    reviewSource="./Reviews/rev4.png"
                    emojiPos="lowerEmoji"
                />
                <ImageSection
                    emojiSource="./emoji/emoji5.png"
                    reviewSource="./Reviews/rev5.png"
                    emojiPos="lowerEmoji"
                />
                <ImageSection
                    emojiSource="./emoji/emoji7.png"
                    reviewSource="./Reviews/rev6.png"
                    emojiPos="differentEmoji"
                />
            </div>
        </div>
    );
}

export default Reviews;
