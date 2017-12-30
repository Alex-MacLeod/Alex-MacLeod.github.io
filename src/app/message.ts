export class Message {
    constructor(
        public sender: string,
        public subject: string,
        public phoneNumber: number,
        public email: string,
        public message: string,
        public honeypot?: string
      ) {  }    
}
