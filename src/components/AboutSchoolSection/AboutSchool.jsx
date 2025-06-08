import styles from "./AboutSchool.module.css"
import FeatureCard from "./FeatureCard";

function FeaturesSection() {
    return (
        <>
            <div className={styles.leftSide}>
                <FeatureCard
                    cardColor="blue"
                    cardSide="left"
                    imgSource="./emoji/emoji1.png"
                    imgClass="emoji-icon1"
                    titleText="Досвідчені та кваліфіковані викладачі,"
                    defaultText="що зроблять процес навчання комфортним та максимально ефективним."
                />

                <FeatureCard
                    cardColor="darkblue"
                    cardSide="left"
                    imgSource="./emoji/emoji2.png"
                    imgClass="emoji-icon2"
                    titleText="Гнучкий онлайн формат:"
                    defaultText="коли-завгодно, де-завгодно та з ким-завгодно."
                />

                <FeatureCard
                    cardColor="grey"
                    cardSide="left"
                    imgSource="./emoji/emoji3.png"
                    imgClass="emoji-icon3"
                    titleText="Персональний менеджер,"
                    defaultText="що підбере тобі викладача, підкаже як організувати навчальний процес та вирішить усі твої запити."
                />
            </div>

            <div className={styles.rightSide}>
                <FeatureCard
                    cardColor="grey"
                    cardSide="right"
                    imgSource="./emoji/emoji4.png"
                    imgClass="emoji-icon4"
                    titleText="Телеграм-бот"
                    defaultText="що відслідковує твої оплати, нагадає про уроки…"
                />

                <FeatureCard
                    cardColor="blue"
                    cardSide="right"
                    imgSource="./emoji/emoji5.png"
                    imgClass="emoji-icon5"
                    titleText="Навчання в просторі від Google:"
                    defaultText="уроки, домашки та усі матеріали в одному місці."
                />

                <FeatureCard
                    cardColor="darkblue"
                    cardSide="right"
                    imgSource="./emoji/emoji6.png"
                    imgClass="emoji-icon6"
                    titleText="Продумана програма,"
                    defaultText="що гарантує результат і зробить твоє навчання максимально цікавим та продуктивним."
                />
            </div>
        </>
    );
}

function AboutSchool() {
    return (
        <section className={styles.aboutSchool}>
            <h1>Lock in - це</h1>
            <div className={styles.description}>
                <FeaturesSection />
            </div>
        </section>
    );
}

export default AboutSchool;
