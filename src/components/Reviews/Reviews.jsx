import styles from "./Reviews.module.css"
import ImageSection from "./ImageSection";

function Reviews() {
    return (
        <div style={{ minHeight: "100dvh" }}>
            <div className={styles.textPart}>
                <h1>Відгуки наших учнів</h1>
                <img src="./emoji/emoji4.png" alt="emoji" className={styles.textEmoji} />
            </div>
            <div className={styles.upperPart}>
                <ImageSection
                    emojiSource="LockInSchool/emoji/starEyes.png"
                    reviewSource="LockInSchool/Reviews/rev1.png"
                    emojiStyle="emojiTanya"
                    reviewStyle="reviewTanya"
                />
                <ImageSection
                    emojiSource="LockInSchool/emoji/group.png"
                    reviewSource="LockInSchool/Reviews/rev2.png"
                    emojiStyle="emojiKatya"
                    reviewStyle="reviewKatya"
                />
                <ImageSection
                    reviewSource="LockInSchool/Reviews/rev3.png"
                    emojiStyle="emojiHrist"
                    reviewStyle="reviewHrist"
                />
            </div>
            <div className={styles.lowerPart}>
                <ImageSection
                    emojiSource="LockInSchool/emoji/rocket.png"
                    reviewSource="LockInSchool/Reviews/rev4.png"
                    emojiStyle="emojiLisa"
                    reviewStyle="reviewLisa"
                />
                <ImageSection
                    emojiSource="LockInSchool/emoji/emoji5.png"
                    reviewSource="LockInSchool/Reviews/rev5.png"
                    emojiStyle="emojiNastya"
                    reviewStyle="reviewNastya"
                />
                <ImageSection
                    emojiSource="LockInSchool/emoji/emoji7.png"
                    reviewSource="LockInSchool/Reviews/rev6.png"
                    emojiStyle="emojiMira"
                    reviewStyle="reviewMira"
                />
            </div>

        </div>
    );
}

export default Reviews;
