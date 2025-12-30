import { Mail, MapPin, Scale, Linkedin } from "lucide-react";
import "./getInTouch.css";

export default function GetInTouch() {
    return (
        <section className="contact-section" id="contact">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">
                Let's discuss how we can support your legal operations
            </p>

            <div className="contact-wrapper">
                {/* LEFT SIDE */}
                <div className="contact-left">
                    <h3>Connect With Mantrix</h3>
                    <p className="desc">
                        We're here to answer your questions and discuss how our legal support
                        services can be tailored to meet your specific needs.
                    </p>

                    {/* EMAIL */}
                    <div className="info-item">
                        <div className="icon-box">
                            <Mail size={18} />
                        </div>
                        <div>
                            <strong>Email Us</strong>
                            <p>
                                <a
                                    href="Mantrixlegal@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Mantrixlegal@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* LINKEDIN */}
                    <div className="info-item">
                        <div className="icon-box">
                            <Linkedin size={18} />
                        </div>
                        <div>
                            <strong>LinkedIn</strong>
                            <p>
                                <a
                                    href="https://www.linkedin.com/in/mantrix-legal-9470333a3/"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    Visit our LinkedIn profile
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* LOCATION */}
                    <div className="info-item">
                        <div className="icon-box">
                            <MapPin size={18} />
                        </div>
                        <div>
                            <strong>Location</strong>
                            <p>
                                India <br />
                                <span>Serving clients globally</span>
                            </p>
                        </div>
                    </div>

                    {/* BUSINESS HOURS */}
                    <div className="hours">
                        <strong>Business Hours</strong>
                        <p>24/7 support available for time-sensitive matters</p>
                    </div>
                </div>

                {/* RIGHT CARD */}
                <div className="contact-card">
                    <div className="logo">
                        <Scale className="logo-icon" />
                        <span className="brand">
                            <span className="brand-white">Man</span>
                            <span className="brand-blue">trix</span>
                        </span>
                    </div>

                    <p className="card-text">
                        Professional legal support services designed to enhance your team's
                        efficiency and productivity.
                    </p>

                    <hr />

                    <h4>Our Commitment</h4>
                    <ul>
                        <li>Quality & professionalism</li>
                        <li>Confidentiality & security</li>
                        <li>Timely delivery</li>
                        <li>Scalable solutions</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
