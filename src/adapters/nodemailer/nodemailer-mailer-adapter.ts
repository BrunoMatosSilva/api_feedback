import { MailAdapter, SendMailData } from "../email-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "141f669e7ab8c0",
        pass: "7811a3ff5af50f"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Equipe Feedget <oi@feedget.com>",
            to: "Bruno Matos <bmsfrontend@gmail.com>",
            subject,
            html: body,
        });
    }
}
