import "./home.css";
import { Link } from "react-router-dom";
import ClientBase from "../components/ClientBase";
import WhatWeDo from "../components/WhatWeDo";
import WhyChoose from "../components/WhyChoose";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";
import { Scale, ChevronDown } from "lucide-react";

function Home() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-content">

                    <div className="logo">
                        <Scale className="logo-icon" />
                        <span className="brand">
                            <span className="brand-white">Man</span>
                            <span className="brand-blue">trix</span>
                        </span>
                    </div>


                    <h2 className="subtitle">Legal Support Services</h2>

                    <h3 className="heading">
                        Comprehensive Legal Operations & Documentation <br />
                        Support
                    </h3>

                    <p className="description">
                        Empowering law firms, in-house legal teams, and businesses with
                        efficient, scalable, and cost-effective legal operations support.
                    </p>

                    <div className="buttons">
                        <button
                            className="btn primary"
                            onClick={() => {
                                document
                                    .getElementById("WhatWeDo")
                                    .scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Our Services
                        </button>
                        <button
                            className="btn outline"
                            onClick={() => {
                                document
                                    .getElementById("contact")
                                    .scrollIntoView({ behavior: "smooth" });
                            }}
                        >
                            Get in Touch
                        </button>

                    </div>
                    <div className="scroll-arrow">
                        <ChevronDown className="chevron" />
                    </div>

                </div>
            </section>

            {/* OTHER SECTIONS */}
            <ClientBase />
            <WhatWeDo />
            <WhyChoose />
            <GetInTouch />
            <Footer />
        </>
    );
}

export default Home;
