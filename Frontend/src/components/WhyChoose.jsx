import "./whyChoose.css";
import { Link } from "react-router-dom";

import { Clock, Lock, DollarSign, Globe } from "lucide-react";

function WhyChoose() {
    return (
        <section className="why-wrapper">
            <h2>Why Choose Mantrix</h2>
            <p className="subtitle">
                Combining global expertise with local efficiency
            </p>

            <div className="why-grid">
                <div className="why-card">
                    <div className="icon"><Clock size={21} color="White" /></div>
                    <h4>Optimal Time Zone Coverage</h4>
                    <p>
                        Based in India, we provide strong time-zone coverage for U.S.
                        clients, enabling overnight work cycles and faster turnarounds.
                    </p>
                </div>

                <div className="why-card">
                    <div className="icon"><Lock size={21} color="White" /></div>
                    <h4>Strict Data Privacy</h4>
                    <p>
                        We maintain rigorous internal processes to ensure confidentiality,
                        data privacy, and secure document handling.
                    </p>
                </div>

                <div className="why-card">
                    <div className="icon"><DollarSign size={21} color="White" /></div>
                    <h4>Cost-Effective Solutions</h4>
                    <p>
                        Offshore advantages allow us to provide high-quality legal support
                        without compromising on professionalism or quality.
                    </p>
                </div>

                <div className="why-card">
                    <div className="icon"><Globe size={21} color="White" /></div>
                    <h4>Flexible & Scalable</h4>
                    <p>
                        Our approach adapts to your workflow, whether you need ongoing
                        support or project-based assistance.
                    </p>
                </div>
            </div>

            {/* CTA BOX */}
            <div className="cta-box">
                <h3>Ready to Streamline Your Legal Operations?</h3>
                <p>
                    Let's discuss how Mantrix can support your legal team with efficient,
                    reliable, and scalable solutions.
                </p>
                <Link to="/contact" className="btn outline">
                    Contact Us Today
                </Link>
            </div>
        </section>
    );
}

export default WhyChoose;
