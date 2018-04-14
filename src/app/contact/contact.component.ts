import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message } from './message';
import { CommonService } from '../app.service';
import { ContactService } from './contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    private contactForm: FormGroup;
    private submitted = false;
    private sent = false;
    private subjects: Array<string> = ['Requesting further information', 'Personal Greeting', 'Website is broken', 'Other'];

    constructor(
        private formbuilder: FormBuilder,
        private cs: CommonService,
        private contactService: ContactService
    ) { this.createForm(); }

    createForm(): void {
        this.contactForm = this.formbuilder.group({
            name: ['', Validators.required ],
            subject: ['', Validators.required ],
            phone: ['', Validators.pattern('^07([\\d]{3})[(\\D\\s)]?[\\d]{3}[(\\D\\s)]?[\\d]{3}$') ],
            email: ['', [Validators.required, Validators.email] ],
            message: ['', Validators.required ],
            honeypot: ['', Validators.maxLength(0) ]
        });
    }

    onSubmit(): void {
        const contactMessage: Message = this.buildMessage();
        this.cs.timeoutPromise(this.contactService.sendMessage(contactMessage), 2000).then((res) => {
            this.sent = true;
            this.submitted = true;
        }).catch((error) => {
            this.submitted = true;
            console.error(`Send message failed: ${error}`);
        });
        this.contactForm.reset();
    }

    buildMessage(): Message {
        const formModel: any = this.contactForm.value;
        const message: Message = new Message();
        message.setSender(formModel.name);
        message.setSubject(formModel.subject);
        message.setPhone(formModel.phone);
        message.setEmail(formModel.email);
        message.setMessage(formModel.message);
        if ( !!formModel.honeypot ) { message.setHoneypot(formModel.honeypot); }
      return message;
    }
}
