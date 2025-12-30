import { ArrowLeft, Mail, Phone, User, MessageSquare, CheckCircle } from "lucide-react";
import "./contact.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
    const navigate = useNavigate();

    // form states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false); // ✅ NEW

    // submit handler
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("https://mantrix-backend.onrender.com/api/contact", {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    message,
                }),
            });

            if (res.ok) {
                setSuccess(true); // ✅ trigger success UI
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="contact-page">
            {/* BACK TO HOME */}
            <button className="back-btn" onClick={() => navigate("/")}>
                <ArrowLeft size={18} /> Back to Home
            </button>

            <div className="contact-container">
                {/* LEFT INFO */}
                <div className="contact-info">
                    <h2>Contact Mantrix</h2>
                    <p>Fill out the form and our team will get back to you shortly.</p>

                    <div className="info-line">
                        <Mail size={18} /> Mantrixlegal@gmail.com
                    </div>

                    <div className="info-line">
                        <Phone size={18} /> Available 24/7 for support
                    </div>
                </div>

                {/* RIGHT SIDE */}
                {success ? (
                    /* ✅ SUCCESS BOX */
                    <div className="success-box">
                        <CheckCircle size={52} />
                        <h3>Message Sent Successfully!</h3>
                        <p>
                            Thank you for contacting Mantrix.
                            Our team will get back to you shortly.
                        </p>
                    </div>
                ) : (
                    /* ✅ FORM */
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="input-group">
                            <User size={16} />
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <Mail size={16} />
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <Phone size={16} />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>

                        <div className="input-group textarea">
                            <MessageSquare size={16} />
                            <textarea
                                placeholder="Your Message"
                                rows="4"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? "Sending..." : "Submit Message"}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
