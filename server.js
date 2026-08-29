import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.json());
app.use(cors());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.hostinger.com",
  port: process.env.SMTP_PORT || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const generateEmailTemplate = (data) => `  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
      .container { max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
      .header { background-color: #198754; color: #ffffff; padding: 25px; text-align: center; }
      .header h2 { margin: 0; font-size: 24px; }
      .content { padding: 30px; color: #333333; }
      .detail-card { background: #f8f9fa; border-left: 4px solid #198754; padding: 15px; margin: 20px 0; border-radius: 4px; }
      .detail-row { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; }
      .detail-row:last-child { border-bottom: none; margin-bottom: 0; }
      .label { font-weight: bold; color: #4a5568; }
      .value { color: #1a202c; }
      .amount-box { background-color: #e6fffa; border: 1px solid #38b2ac; color: #234e52; text-align: center; padding: 15px; font-size: 22px; font-weight: bold; border-radius: 6px; margin: 20px 0; }
      .footer { background-color: #edf2f7; text-align: center; padding: 15px; font-size: 12px; color: #718096; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>❤️ New Donation Received</h2>
      </div>
      <div class="content">
        <p>Hello Team,</p>
        <p>A new donor has submitted a payment pledge notification. Below are the complete donor details:</p>
        
        <div class="amount-box">
          Amount Donated: ₹${data.amount}
        </div>

        <div class="detail-card">
          <div class="detail-row"><span class="label">Donor Name:</span> <span class="value">${data.name}</span></div>
          <div class="detail-row"><span class="label">Email Address:</span> <span class="value">${data.email}</span></div>
          <div class="detail-row"><span class="label">Phone:</span> <span class="value">${data.phone}</span></div>
          <div class="detail-row"><span class="label">PAN Number:</span> <span class="value">${data.pan ? data.pan.toUpperCase() : "N/A"}</span></div>
          <div class="detail-row"><span class="label">Address:</span> <span class="value">${data.address}</span></div>
          <div class="detail-row"><span class="label">Donation Type:</span> <span class="value">${data.donationType}</span></div>
          <div class="detail-row"><span class="label">Special Instructions / Notes:</span> <span class="value">${data.message || "N/A"}</span></div>
        </div>
      </div>
      <div class="footer">
        Automated notification from your website's Donation Portal.
      </div>
    </div>
  </body>
  </html>
`;

// 1. Send Donation Email Route
app.post("/api/send-donation-email", async (req, res) => {
  const donationData = req.body;

  const mailOptions = {
    from: `"Donation Portal" <${process.env.SMTP_USER}>`,
    to: process.env.ORG_RECEIVER_EMAIL || process.env.SMTP_USER,
    subject: `New Donation Alert: ₹${donationData.amount} from ${donationData.name}`,
    html: generateEmailTemplate(donationData),
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("SMTP Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// 2. Volunteer Registration Email Route
app.post("/api/send-volunteer-email", async (req, res) => {
  const volunteerData = req.body;

  const mailOptions = {
    from: `"Volunteer Application" <${process.env.SMTP_USER}>`,
    to: process.env.ORG_RECEIVER_EMAIL || process.env.SMTP_USER,
    subject: `New Volunteer Application: ${volunteerData.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
          .container { max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
          .header { background-color: #0d6efd; color: #ffffff; padding: 25px; text-align: center; }
          .header h2 { margin: 0; font-size: 24px; }
          .content { padding: 30px; color: #333333; }
          .detail-card { background: #f8f9fa; border-left: 4px solid #0d6efd; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .detail-row { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; }
          .detail-row:last-child { border-bottom: none; margin-bottom: 0; }
          .label { font-weight: bold; color: #4a5568; }
          .value { color: #1a202c; }
          .footer { background-color: #edf2f7; text-align: center; padding: 15px; font-size: 12px; color: #718096; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>🤝 New Volunteer Registration</h2>
          </div>
          <div class="content">
            <p>Hello Team,</p>
            <p>A new volunteer registration has been submitted. Below are the applicant's details:</p>
            
            <div class="detail-card">
              <div class="detail-row"><span class="label">Full Name:</span> <span class="value">${volunteerData.name}</span></div>
              <div class="detail-row"><span class="label">Email Address:</span> <span class="value">${volunteerData.email}</span></div>
              <div class="detail-row"><span class="label">Phone:</span> <span class="value">${volunteerData.phone}</span></div>
              <div class="detail-row"><span class="label">Availability:</span> <span class="value">${volunteerData.availability}</span></div>
              <div class="detail-row"><span class="label">Preferred Role:</span> <span class="value">${volunteerData.areaOfInterest}</span></div>
              <div class="detail-row"><span class="label">Motivation / Message:</span> <span class="value">${volunteerData.message}</span></div>
            </div>
          </div>
          <div class="footer">
            Automated notification from your website's Volunteer Registration Portal.
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Volunteer registration sent successfully!" });
  } catch (error) {
    console.error("SMTP Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// 3. Full-Time Job Application Email Route
app.post("/api/send-job-application-email", async (req, res) => {
  const applicantData = req.body;

  const mailOptions = {
    from: `"Job Application Portal" <${process.env.SMTP_USER}>`,
    to: process.env.ORG_RECEIVER_EMAIL || process.env.SMTP_USER,
    subject: `New Job Application: ${applicantData.role} - ${applicantData.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
          .container { max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
          .header { background-color: #0d6efd; color: #ffffff; padding: 25px; text-align: center; }
          .header h2 { margin: 0; font-size: 24px; }
          .content { padding: 30px; color: #333333; }
          .detail-card { background: #f8f9fa; border-left: 4px solid #0d6efd; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .detail-row { display: flex; justify-content: space-between; margin-bottom: 10px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; }
          .detail-row:last-child { border-bottom: none; margin-bottom: 0; }
          .label { font-weight: bold; color: #4a5568; }
          .value { color: #1a202c; }
          .link-btn { display: inline-block; padding: 8px 16px; background-color: #0d6efd; color: #ffffff !important; text-decoration: none; border-radius: 4px; font-weight: bold; }
          .footer { background-color: #edf2f7; text-align: center; padding: 15px; font-size: 12px; color: #718096; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>💼 New Full-Time Job Application</h2>
          </div>
          <div class="content">
            <p>Hello HR Team,</p>
            <p>A new candidate has submitted an application. Below are their details:</p>
            
            <div class="detail-card">
              <div class="detail-row"><span class="label">Applicant Name:</span> <span class="value">${applicantData.name}</span></div>
              <div class="detail-row"><span class="label">Email Address:</span> <span class="value">${applicantData.email}</span></div>
              <div class="detail-row"><span class="label">Phone:</span> <span class="value">${applicantData.phone}</span></div>
              <div class="detail-row"><span class="label">Desired Role:</span> <span class="value">${applicantData.role}</span></div>
              <div class="detail-row"><span class="label">Experience:</span> <span class="value">${applicantData.experience}</span></div>
              <div class="detail-row">
                <span class="label">Resume Link:</span> 
                <span class="value"><a href="${applicantData.resumeLink}" target="_blank" class="link-btn">View Resume</a></span>
              </div>
              <div class="detail-row"><span class="label">Cover Letter:</span> <span class="value">${applicantData.coverLetter}</span></div>
            </div>
          </div>
          <div class="footer">
            Automated notification from your website's Career Opportunities Portal.
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Application submitted successfully!" });
  } catch (error) {
    console.error("SMTP Error:", error);
    res.status(500).json({ success: false, message: "Failed to send application." });
  }
});

// 4. Contact Form Email Route
app.post("/api/send-contact-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
    to: process.env.ORG_RECEIVER_EMAIL || process.env.SMTP_USER,
    replyTo: email,
    subject: `New Contact Inquiry: ${subject}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; }
          .container { max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
          .header { background-color: #0d6efd; color: #ffffff; padding: 25px; text-align: center; }
          .header h2 { margin: 0; font-size: 24px; }
          .content { padding: 30px; color: #333333; }
          .detail-card { background: #f8f9fa; border-left: 4px solid #0d6efd; padding: 15px; margin: 20px 0; border-radius: 4px; }
          .detail-row { margin-bottom: 12px; border-bottom: 1px dashed #e2e8f0; padding-bottom: 8px; }
          .detail-row:last-child { border-bottom: none; margin-bottom: 0; }
          .label { font-weight: bold; color: #4a5568; display: block; margin-bottom: 4px; }
          .value { color: #1a202c; }
          .footer { background-color: #edf2f7; text-align: center; padding: 15px; font-size: 12px; color: #718096; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📩 New Contact Form Message</h2>
          </div>
          <div class="content">
            <p>Hello Team,</p>
            <p>You have received a new inquiry from your website's contact form:</p>
            
            <div class="detail-card">
              <div class="detail-row"><span class="label">Sender Name:</span> <span class="value">${name}</span></div>
              <div class="detail-row"><span class="label">Email Address:</span> <span class="value">${email}</span></div>
              <div class="detail-row"><span class="label">Subject:</span> <span class="value">${subject}</span></div>
              <div class="detail-row"><span class="label">Message:</span> <span class="value" style="white-space: pre-line;">${message}</span></div>
            </div>
          </div>
          <div class="footer">
            Automated email generated from your website Contact Us page.
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Contact message sent successfully!" });
  } catch (error) {
    console.error("SMTP Error:", error);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
});

// Serve static React build files from 'dist' directory
app.use(express.static(path.join(__dirname, "dist")));

// ✅ FIX: Updated catch-all route syntax compatible with path-to-regexp v8
app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));