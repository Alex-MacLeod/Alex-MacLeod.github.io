export class Message {
    constructor(
        private sender: string = '',
        private subject: string = '',
        private phone: string = '',
        private email: string = '',
        private message: string = '',
        private honeypot?: string | undefined
      ) {  }

    public getSender(): string {
        return this.sender;
    }

    public getSubject(): string {
        return this.subject;
    }

    public getPhone(): string {
        return this.phone;
    }

    public getEmail(): string {
        return this.email;
    }

    public getMessage(): string {
        return this.message;
    }
    
    public getHoneypot(): string {
        return this.honeypot;
    }

    public setSender(sender: string): void {
        this.sender = sender;
    }

    public setSubject(subject: string): void {
        this.subject = subject;
    }

    public setPhone(phone: string): void {
        this.phone = phone;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setMessage(message: string): void {
        this.message = message;
    }

    public setHoneypot(honeypot: string): void {
        this.honeypot = honeypot;
    }

}
