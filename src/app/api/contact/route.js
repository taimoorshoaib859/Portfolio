import nodemailer from "nodemailer";
export async function POST(request) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return Response.json(
        { message: "Please fill in all fields." },
        { status: 400 },
      );
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "taimoorshoaib456@gmail.com",
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `
       Name: ${name}
       Email: ${email}

       Message:
       ${message}
                `,
    });
    return Response.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return Response.json({ message: "Failed to send email." }, { status: 500 });
  }
}
