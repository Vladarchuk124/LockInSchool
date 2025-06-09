import styles from "./ImageSection.module.css"

function ImageSection (props) {
    return (
        <div className={styles.imgSection}>
            {props.emojiSource && <img src={props.emojiSource} alt="emoji" className={styles[props.emojiStyle]} />}
            <img src={props.reviewSource} alt="review" className={styles[props.reviewStyle]}/>
        </div>
    );
}

export default ImageSection;
