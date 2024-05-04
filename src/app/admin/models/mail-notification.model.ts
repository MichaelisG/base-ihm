export interface MailNotification {
  id: number;
  subject: string;
  mailTo: string;
  mailCc: string;
  text: string;
  html: string;
  code: string;
}