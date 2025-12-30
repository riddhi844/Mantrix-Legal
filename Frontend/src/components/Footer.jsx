import { Scale } from "lucide-react";
import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="logo">
                <Scale className="logo-icon" size={25} />
                <span className="brandF">
                    <span className="brand-Black">Man</span>
                    <span className="brand-blue">trix</span>
                </span>
            </div>
            <p>© 2025 Mantrix Legal Support Services. All rights reserved.</p>
        </footer>
    );
}
