

// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { email, orderId, totalAmount } = req.body;
    
//     // Validate input
//     if (!email || !orderId || !totalAmount) {
//       return res.status(400).json({ error: 'Email, orderId, and totalAmount are required' });
//     }

//     console.log('Received request:', req.body); // Add this to debug

//     // Create Nodemailer transporter
//     const transporter = nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       service: "gmail",
//       secure: true,
//       port: 465, 
//       auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//     });

//     // Email content
//     const mailOptions = {
//       from: process.env.EMAIL_USERNAME,
//       to: email,
//       subject: `Order Confirmation: ${orderId}`,
//       text: `
//         Thank you for your order! 🎉
        
//         Your order ID is: ${orderId}
//         Total Amount: $${totalAmount}
        
//         We will process your order soon. If you have any questions, feel free to contact us.
        
//         Best Regards,
//         Your Store Team
//       `,
//     };

//     try {
//       // Send email
//       console.log('Sending email...'); // Debugging log
//       await transporter.sendMail(mailOptions);
//       console.log('Email sent successfully');
//       res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ error: 'Failed to send email', details: error.message });
//     }
//   } else {
//     res.status(405).json({ error: 'Method Not Allowed' });
//   }
// }


import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  console.log('Request Method:', req.method); // Debug log
  
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  
  const { email, orderId, totalAmount } = req.body;
  
  if (!email || !orderId || !totalAmount) {
    return res.status(400).json({ error: 'Email, orderId, and totalAmount are required' });
  }

  try {
    const transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 465,
    //   secure: true,
    service:"gmail",
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USERNAME,
      to: email,
      subject: `Order Confirmation: ${orderId}`,
      text: `Thank you for your order! 🎉\n\nYour order ID is: ${orderId}\nTotal Amount: $${totalAmount}\n\nWe will process your order soon.`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email', details: error.message });
  }
}
