/* eslint-disable operator-linebreak */
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import qr from 'qr-image';

dotenv.config();

export default async (req, res) => {
  console.log(req.body);
  console.log(process.env.EMAIL);
  console.log(process.env.PASSWORD);
  const { name, email } = req.body;

  const qrCode = qr.imageSync(`${email}`, { type: 'png' });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOption = {
    from: `${process.env.EMAIL}`,
    to: `${email}`,
    subject: 'Your QR Code for Arithemania 2.0',
    html:
      `<p>Dear ${name},</p>` +
      '<p>We are excited to have you Volunteer in Arithemania 2.0, the flagship hackathon of Shunya. We require all volunteer to have a unique QR code that will be scanned every time you enter or leave the premises of the hackathon, as well as before having any meals (lunch, dinner, snacks, and breakfast).</p>' +
      '<p>Attached to this email, you will find your unique QR code. Please make sure to save it on your mobile device and have it ready for scanning when necessary. The code will be your pass to enter the hackathon premises, and it will also help us keep track of the number of participants at any given time.</p>' +
      "<h3>Do's and Dont's</h3>" +
      '<ol><li>We request you to report at the venue by 8:00 am on 8th April 2023.</li>' +
      '<li>Kindly to be noted ,breakfast will not be provided.Hence please have your breakfast and report.</li>' +
      '<li>We would like to remind you that it is mandatory for all participants to stay on campus during the event and not leave the premises until the conclusion of the event.</li>' +
      '<li>It is essential to bring your college ID card and consent form for identity verification. Additionally, food, water, snacks, etc., will be provided for your convenience. However, we ask that you refrain from bringing any food items inside Pesu 52.</li>' +
      '<li>Please ensure that you carry your personal medicines and toiletries. You are also required to bring your own laptops and chargers. We will be providing internet and charging points to facilitate your work. In case of a hardware project, you must bring your own components.</li>' +
      '<li>Please note that the organizers will not be responsible for any of your belongings.</li>' +
      '<li>The decision of the judges is final. We do not entertain any arguments in this regard.</li>' +
      '<li>Furthermore, if any team is involved in any form of malpractice or unnecessary activities, the team will be immediately disqualified from the hackathon, and strict measures will be taken by the management.</li>' +
      '<li>We expect all participants to adhere to the code of conduct provided by the college. We appreciate your cooperation in maintaining a safe and productive environment for everyone.</li>' +
      '<li>Participation ID Card must be worn throughout the event.</li>' +
      '<li>Buses will be provided to ECC students on 8th April,2023.Please report at 7:15 am sharp.</li>' +
      '</ol>' +
      '<p>We thank you for your cooperation in ensuring the safety and success of Arithemania 2.0. If you have any queries or concerns, please feel free to contact us at shunya@pes.edu. If your team dropped out of the Hackathon please ignore the following message</p>' +
      '<p>Thank you.</p>' +
      '<p>Regards,</p>' +
      '<p>Team Shunya', // HTML body
    attachments: [
      {
        filename: `${name}.png`,
        content: qrCode,
      },
      {
        filename: 'consentForm.pdf',
        path: 'C:/Users/Adithya/Documents/PES/Clubs/Shunya/arithmania/pages/api/consentForm.pdf',
        contentType: 'application/pdf',
      },
    ],
  };

  transporter.sendMail(mailOption, (err, data) => {
    if (err) {
      console.log(err);
      console.log(data);
      res.send(`error${JSON.stringify(err)}`);
    } else {
      console.log('mail send');
      res.send('success');
    }
  });
};
