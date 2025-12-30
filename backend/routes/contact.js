import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: "All required fields missing" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: "Mantrixlegal@gmail.com",
            subject: "New Contact Form Message",
            html: `
        <h2>New Contact Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
        });

        res.status(200).json({ msg: "Message sent successfully" });

    } catch (error) {
        console.error("EMAIL ERROR 👉", error);
        res.status(500).json({ msg: "Email failed to send" });
    }
});

export default router;
