import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
@ViewChild('f') signupForm: NgForm;
genders : ['male','female'];

onSubmit ()

  {
    console.log(this.signupForm);
  }
  // onSubmit( form : NgForm)

 // {
 // console.log(form);
 // }

}
