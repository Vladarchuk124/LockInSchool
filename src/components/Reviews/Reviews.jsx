import styles from "./Reviews.module.css"
import ImageSection from "./ImageSection";

function Reviews() {
    return (
        <div style={{ minHeight: "100dvh" }}>
            <div className={styles.textPart}>
                <h1>Відгуки наших учнів</h1>
                <img src="LockInSchool/emoji/emoji4.png" alt="emoji" className={styles.textEmoji} />
            </div>
            <div className={styles.upperPart}>
                <ImageSection
                    emojiSource="./emoji/starEyes.png"
                    reviewSource="./Reviews/rev1.png"
                    emojiStyle="emojiTanya"
                    reviewStyle="reviewTanya"
                />
                <ImageSection
                    reviewSource="./Reviews/rev3.png"
                    emojiStyle="emojiHrist"
                    reviewStyle="reviewHrist"
                />
                <ImageSection
                    emojiSource="./emoji/group.png"
                    reviewSource="./Reviews/rev2.png"
                    emojiStyle="emojiKatya"
                    reviewStyle="reviewKatya"
                />
            </div>
            <div className={styles.lowerPart}>
                <ImageSection
                    emojiSource="./emoji/emoji5.png"
                    reviewSource="./Reviews/rev5.png"
                    emojiStyle="emojiNastya"
                    reviewStyle="reviewNastya"
                />
                <ImageSection
                    emojiSource="./emoji/rocket.png"
                    reviewSource="./Reviews/rev4.png"
                    emojiStyle="emojiLisa"
                    reviewStyle="reviewLisa"
                />
                <ImageSection
                    emojiSource="./emoji/emoji6.png"
                    reviewSource="./Reviews/rev7.png"
                    emojiStyle="emojiMar"
                    reviewStyle="reviewMar"
                />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                <ImageSection
                    emojiSource="./emoji/group.png"
                    reviewSource="./Reviews/rev8.png"
                    emojiStyle="emojiElm"
                    reviewStyle="reviewElm"
                />
                <ImageSection
                    emojiSource="./emoji/americanFlagEmoji.png"
                    reviewSource="./Reviews/rev9.png"
                    emojiStyle="emojiMira"
                    reviewStyle="reviewMira"
                />
            </div>
        </div>
    );
}

export default Reviews;
