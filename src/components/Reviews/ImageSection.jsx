import styles from "./ImageSection.module.css"

function ImageSection (props) {
    return (
        <div className={styles.imgSection}>
            {props.emojiSource && <img src={props.emojiSource} alt="emoji" className={styles[props.emojiPos]} />}
            <img src={props.reviewSource} alt="review" />
        </div>
    );
}

export default ImageSection;
