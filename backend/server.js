import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: "Missing required fields" });
    }

    try {
        await resend.emails.send({
            from: "Mantrix Contact <onboarding@resend.dev>",
            to: ["mantrixlegal87@gmail.com"],
            subject: "New Contact Form Message",
            html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
        });

        res.status(200).json({ msg: "Message sent successfully ✅" });
    } catch (error) {
        console.error("RESEND ERROR 👉", error);
        res.status(500).json({ msg: "Email failed to send ❌" });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
    console.log(`✅ Server running on port ${PORT}`)
);
