import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Message }    from '../message';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @Input() message: Message;
  contactForm: FormGroup;
  submitted = false;
  sent =  false;
  subjects = ['Requesting further information', 'Personal Greeting', 'Website is broken', 'Other'];
	
	constructor(
    private fb: FormBuilder,
		private contactService: ContactService
  ) { this.createForm(); }
  
  createForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required ],
      subject: ['', Validators.required ],
      phone: ['', Validators.pattern("^07([\\d]{3})[(\\D\\s)]?[\\d]{3}[(\\D\\s)]?[\\d]{3}$") ],
      email: ['', [Validators.required, Validators.email] ],
      message: ['', Validators.required ],
      honeypot: ['', Validators.maxLength(0) ]
    });
  }

  reset(): void {
    this.contactForm.reset();
  }

  onSubmit(): void {
    this.message = this.prepareSendMessage();
    delete this.message.honeypot;
    this.contactService.sendMessage(this.message).subscribe((result) => this.sent === !!result)
    this.submitted = true;
    this.reset();
  }

  prepareSendMessage(): Message {
    const formModel = this.contactForm.value;
    const preparedMessage = {
      sender: formModel.name as string,
      subject: formModel.subject as string,
      phoneNumber: formModel.phone as number,
      email: formModel.email as string,
      message: formModel.message as string,
      honeypot: formModel.honeypot as string
    }
    return preparedMessage;
  }
}
