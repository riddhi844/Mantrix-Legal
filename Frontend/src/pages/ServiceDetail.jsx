import { ArrowLeft, CheckCircle } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import "./serviceDetail.css";

const serviceData = {
    "contract-lifecycle": {
        title: "Contract Lifecycle Support",
        subtitle: "End-to-end contract management services",
        overview:
            "We provide comprehensive support throughout the entire contract lifecycle, from initial drafting through execution and renewal.",
        provides: [
            "Contract drafting and customization",
            "Professional contract summarization",
            "Organized contract repository management",
            "Renewal reminders and compliance tracking",
            "Detailed contract review and analysis",
            "Strategic redlining and negotiations",
            "Version control and tracking",
            "Archive management",
        ],
        benefits: [
            "Reduced time spent on contract administration",
            "Improved accuracy and consistency in contract language",
            "Better risk identification and mitigation",
            "Streamlined approval processes",
            "Easy access to historical contracts",
        ],
    },

    "compliance-documentation": {
        title: "Compliance Documentation",
        subtitle: "Ensuring regulatory readiness and compliance tracking",
        overview:
            "We help organizations stay compliant by maintaining accurate records, trackers, and policy documentation.",
        provides: [
            "Maintaining compliance trackers",
            "Preparing internal policy documents",
            "Regulatory compliance support",
            "Audit-ready documentation",
            "Ongoing compliance monitoring",
        ],
        benefits: [
            "Reduced compliance risk",
            "Improved regulatory readiness",
            "Centralized compliance documentation",
            "Faster audits and reviews",
        ],
    },

    "legal-research": {
        title: "Legal Research & Drafting",
        subtitle: "Accurate research and professional legal documentation",
        overview:
            "Our legal research services support informed decision-making and strong legal documentation.",
        provides: [
            "Comprehensive legal research",
            "Drafting legal notices and memos",
            "Case law research and analysis",
            "Contractual clause research",
            "General legal assistance",
        ],
        benefits: [
            "Better legal strategy support",
            "Time savings for legal teams",
            "Accurate and reliable research",
            "High-quality legal documentation",
        ],
    },

    "litigation-support": {
        title: "Litigation Support",
        subtitle: "Back-end support for litigation teams",
        overview:
            "We assist litigation teams with documentation, summaries, and preparation support.",
        provides: [
            "Non-appearance support",
            "Preparing legal briefs",
            "Case file summarization",
            "Drafting basic pleadings",
            "Document review and organization",
        ],
        benefits: [
            "Faster case preparation",
            "Improved case organization",
            "Reduced workload for advocates",
            "Better case tracking",
        ],
    },

    "ip-support": {
        title: "IP Support",
        subtitle: "Intellectual property documentation and filing assistance",
        overview:
            "We provide structured IP support services for filings, documentation, and coordination.",
        provides: [
            "Basic IP filing assistance",
            "IP documentation management",
            "Filing coordination",
            "Administrative IP support",
            "IP record maintenance",
        ],
        benefits: [
            "Streamlined IP processes",
            "Better IP documentation control",
            "Reduced filing errors",
            "Improved coordination with counsel",
        ],
    },
};


export default function ServiceDetail() {
    const { slug } = useParams();
    const navigate = useNavigate();
    const service = serviceData[slug];

    if (!service) return <h2>Service not found</h2>;

    return (
        <section className="service-page">
            <button className="back-btn" color="Blue" onClick={() => navigate(-1)}>
                <ArrowLeft size={18} color="Blue" /> Back
            </button>

            <div className="service-hero">
                <h1>{service.title}</h1>
                <p>{service.subtitle}</p>
            </div>

            <div className="service-content">
                <h3>Overview</h3>
                <p>{service.overview}</p>

                <h3>What We Provide</h3>
                <ul className="grid-list">
                    {service.provides.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>

                <h3>Key Benefits</h3>
                <ul className="benefits">
                    {service.benefits.map((item, i) => (
                        <li key={i}>
                            <CheckCircle size={16} /> {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="service-cta">
                <h3>Ready to Get Started?</h3>
                <p>Contact us to discuss how this service can support your organization.</p>
                <button onClick={() => navigate("/contact")}>Contact Us</button>
            </div>
        </section>
    );
}
