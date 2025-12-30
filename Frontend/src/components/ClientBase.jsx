import "./clientBase.css";
import { Building2, Landmark, Users } from "lucide-react";

function ClientBase() {
    return (
        <section className="client-base">
            <h2>Our Client Base</h2>
            <p className="subtitle">
                We provide tailored legal support to three primary client segments
            </p>

            <div className="cards">
                <div className="card">
                    <div className="icon"><Building2 size={26} /></div>
                    <h3>Law Firms</h3>
                    <p>
                        Research assistance, drafting support, and back-end documentation
                        services
                    </p>
                </div>

                <div className="card active">
                    <div className="icon"><Landmark size={26} /></div>
                    <h3>In-House Legal Departments</h3>
                    <p>
                        Contract review, compliance tracking, and operational legal support
                    </p>
                </div>

                <div className="card">
                    <div className="icon"><Users size={26} /></div>
                    <h3>Companies Without Dedicated Legal Teams</h3>
                    <p>
                        End-to-end documentation, contract management, and external counsel
                        coordination
                    </p>
                </div>
            </div>

            <div className="note">
                Our workflow is flexible and customized based on each client's internal
                structure and requirements.
            </div>
        </section>
    );
}

export default ClientBase;
