import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/Iproduct/iuser';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent {
  constructor(  private fb: FormBuilder,
    private userService: UserService,
    private toastor: ToastrService
    ){}
  userForm = this.fb.group({
  name: ['',Validators.required],
  email:[''],
  address:[''],
  password:[''],
  confirmPassword:[''],
  phone:['']
  })
  onHandleSubmit() {
    if(this.userForm.valid){
      const user:IUser={
        name: this.userForm.value.name || "",
        email: this.userForm.value.email || '',
        address: this.userForm.value.address || '',
        phone: this.userForm.value.phone || '',
        password: this.userForm.value.password || '',
        confirmPassword: this.userForm.value.confirmPassword || '',
      }
    console.log(this.userForm.value)
    this.userService.singup(user).subscribe( (response:any)=>{
      this.toastor.success(response.message);
    })
    }
    }
}
