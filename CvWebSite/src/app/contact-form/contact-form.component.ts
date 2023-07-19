import { Component } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  
  
  public mailForm: FormGroup;
  name_input: FormControl;
  subject_input: FormControl;
  email_input: FormControl;
  message_input: FormControl;
  constructor(private fb: FormBuilder) {
    this.name_input=new FormControl('', [Validators.required]),
    this.subject_input=new FormControl('', [Validators.required]),
    this.email_input=new FormControl('', [Validators.required]),
    this.message_input=new FormControl('', [Validators.required])
    this.mailForm = fb.group({
    name_input: this.name_input,
    subject_input: this.subject_input,
    email_input: this.email_input,
    message_input: this.message_input

    });
  }

  getValues(){
    this.name_input = this.mailForm.get('name_input')?.value;
    this.subject_input = this.mailForm.get('subject_input')?.value;
    this.email_input = this.mailForm.get('email_input')?.value;
    this.message_input = this.mailForm.get('message_input')?.value;
    let contact = {   
      name: this.name_input,
      subject: this.subject_input,
      email: this.email_input,
      message: this.message_input
    }
    return contact;
  }
  onSubmit(){
    let contact = this.getValues();
    console.log(contact);
}


}