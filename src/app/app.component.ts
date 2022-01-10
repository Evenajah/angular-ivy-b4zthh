import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = {
    form: [
      {
        id: 'name',
        value: '',
        type: 'text',
      },
      {
        id: 'email',
        value: '',
        type: 'text',
      },
      {
        id: 'gender',
        value: 'male',
        type: 'radio',
      },
    ],
  };
  name = 'Angular ' + VERSION.major;
}
