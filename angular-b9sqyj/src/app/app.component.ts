import { Component, OnInit } from '@angular/core';
import { MyFormServiceService } from './my-form-service.service'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent implements OnInit {
  formSchema :any[];
//formProperties : any[];
  required: any[];

constructor(private myFormData: MyFormServiceService){ }
  ngOnInit() {
  this.formSchema = Array.of(this.myFormData.formData.schema)
  this.required = Array.of(this.formSchema[0].required);
  console.log(this.required)
   }

}
