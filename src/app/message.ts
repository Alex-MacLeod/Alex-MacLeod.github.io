export class Message {
    constructor(
        public sender: string,
        public subject: string,
        public phone: number,
        public email: string,
        public message: string,
        public honeypot?: string
      ) {  }
}
