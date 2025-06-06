import PlanNameTablet from "../PlanNameTablet/PlanNameTablet";
import OtherPriceCard from "./OtherPriceCard";

function OtherPlansPrices() {

    const sectionStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100dvh"
    }

    return (
        <section style={sectionStyle}>
            <PlanNameTablet planNameText="Парні уроки" />
            <OtherPriceCard
                lessonPrice="550"
                price="4400"
            />

            <PlanNameTablet planNameText="Групові уроки" />

            <OtherPriceCard
                lessonPrice="450"
                price="3600"
            />
        </section>
    );
}

export default OtherPlansPrices;
