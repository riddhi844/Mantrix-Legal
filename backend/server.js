import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
    origin: "https://mantrix-legal.vercel.app"
}));
app.use(express.json());

app.post("/api/contact", async (req, res) => {
    const { name, email, phone, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"Mantrix Website" <${process.env.EMAIL}>`,
            to: process.env.EMAIL,
            replyTo: email,
            subject: "New Contact Form Message",
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        res.status(200).json({ msg: "Message sent successfully!" });
    } catch (error) {
        console.error("Email Error:", error);
        res.status(500).json({ msg: "Email failed to send" });
    }
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
