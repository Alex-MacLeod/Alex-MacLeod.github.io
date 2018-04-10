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
    private message: Message;
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
        this.message = this.buildMessage();
        delete this.message.honeypot;
        this.cs.timeoutPromise(this.contactService.sendMessage(this.message), 1000).then((res) => {
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
        const preparedMessage: Message = {
            sender: formModel.name as string,
            subject: formModel.subject as string,
            phone: formModel.phone as number,
            email: formModel.email as string,
            message: formModel.message as string,
            honeypot: formModel.honeypot as string
        };
      return preparedMessage;
    }
}
