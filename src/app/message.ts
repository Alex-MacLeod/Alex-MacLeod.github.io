export class Message {
    constructor(
        protected sender: string,
        protected subject: string,
        protected phone: number,
        protected email: string,
        protected message: string,
        protected honeypot?: string
      ) {  }    
}
