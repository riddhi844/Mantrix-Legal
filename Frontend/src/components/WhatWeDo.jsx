import "./whatWeDo.css";
import { Link } from "react-router-dom";

import { FileText, ShieldCheck, Search, Scale, Lightbulb } from "lucide-react";

function WhatWeDo() {
    return (
        <section className="what-we-do" id="WhatWeDo">
            <h2>What We Do</h2>
            <h4>Key Focus Areas</h4>
            <p className="subtitle">
                We provide efficient, reliable, and scalable support across these key
                legal operations
            </p>

            <div className="services-grid">
                <div className="service-card">
                    <div className="icon"><FileText size={22} /></div>
                    <h3>Contract Lifecycle Support</h3>
                    <ul>
                        <li>Drafting and reviewing contracts</li>
                        <li>Contract summarization and redlining</li>
                        <li>Organizing contract repositories</li>
                        <li>End-to-end lifecycle management</li>
                    </ul>
                    <Link to="/services/contract-lifecycle">
                        Learn More →
                    </Link>
                </div>

                <div className="service-card">
                    <div className="icon"><ShieldCheck size={22} /></div>
                    <h3>Compliance Documentation</h3>
                    <ul>
                        <li>Maintaining compliance trackers</li>
                        <li>Preparing policy documents</li>
                        <li>Internal documentation readiness</li>
                        <li>Regulatory compliance support</li>
                    </ul>
                    <Link to="/services/compliance-documentation">Learn More →</Link>
                </div>

                <div className="service-card">
                    <div className="icon"><Search size={22} /></div>
                    <h3>Legal Research & Drafting</h3>
                    <ul>
                        <li>Comprehensive legal memos</li>
                        <li>Case notes and analysis</li>
                        <li>Drafting legal notices</li>
                        <li>General legal assistance</li>
                    </ul>
                    <Link to="/services/legal-research">Learn More →</Link>
                </div>

                <div className="service-card">
                    <div className="icon"><Scale size={22} /></div>
                    <h3>Litigation Support</h3>
                    <ul>
                        <li>Non-appearance support</li>
                        <li>Preparing legal briefs</li>
                        <li>Case file summarization</li>
                        <li>Drafting basic pleadings</li>
                    </ul>
                    <Link to="/services/litigation-support">Learn More →</Link>
                </div>

                <div className="service-card">
                    <div className="icon"><Lightbulb size={22} /></div>
                    <h3>IP Support</h3>
                    <ul>
                        <li>Basic filing assistance</li>
                        <li>IP documentation management</li>
                        <li>Filing coordination</li>
                        <li>Administrative support</li>
                    </ul>
                    <Link to="/services/ip-support">Learn More →</Link>
                </div>
            </div>
        </section>
    );
}

export default WhatWeDo;
