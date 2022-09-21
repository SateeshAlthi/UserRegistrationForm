import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css']
})
export class UserregistrationComponent implements OnInit {

  userForm: FormGroup;
  listData:any;

 constructor(private fb:FormBuilder) {
   this.listData=[];
   this.userForm = this.fb.group(
     {
       name:['',Validators.required],
       email:['',Validators.required],
       phone:['',Validators.required],
       address:['',Validators.required]
     }
   )
  }
  public addItem():void{
   this.listData.push(this.userForm.value);
  }
  reset(){
   this.userForm.reset();
  }
   deleteItem(element){
     this.listData.forEach((value,index) => {
       if(value == element)
       this.listData.splice(index,1);
     });
   }
 ngOnInit(): void {
 }
}
