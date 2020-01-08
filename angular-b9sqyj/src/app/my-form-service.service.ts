import { Injectable } from '@angular/core';

@Injectable()
export class MyFormServiceService {

  formData = {"schema":{"title":"A registration form","description":"A simple form example.","type":"object","required":["firstName","lastName"],"properties":{"firstName":{"type":"string","title":"First name","default":"Chuck"},"lastName":{"type":"string","title":"Last name"},"age":{"type":"integer","title":"Age"},"bio":{"type":"string","title":"Bio"},"password":{"type":"string","title":"Password","minLength":3},"telephone":{"type":"string","title":"Telephone","minLength":10}}}};

  constructor() { }

}