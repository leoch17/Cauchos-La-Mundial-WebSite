import React from "react";
import BannerSection from "./sections/BannerSection";
import DescriptionSection from "./sections/DescriptionSection";
import MapSection from "./sections/MapSection";
import PartnerSection from "./sections/PartnerSection";
import Footer from "../Footer";

function Home() {

    return (
        <>
            <BannerSection />

            <DescriptionSection />

            <MapSection />

            <PartnerSection />

            <Footer />
        </>
    );
}

export default Home;