import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  constructor(
    private userservice: UserService,
    private fb: FormBuilder,
    private toastor: ToastrService
  ) {
  }
  userForm = this.fb.group({
    email: [''],
    password: [''],

  })
  onHandleSubmit() {
    if (this.userForm.valid) {
      const User: any = {
        email: this.userForm.value.email || '',
        password: this.userForm.value.password || '',
      }
      // console.log(User);
      this.userservice.singin(User).subscribe(
        // data=>console.log('data')
        (response:any) => {
          // console.log(response.user.role,response);
          // const role:string =response.user.role
          if (!response.user) {
            this.toastor.success(response.message);
          }
          else {
            // Hiển thị thông báo lỗi đăng nhập
            const token: any = response.accsestoken
            localStorage.setItem("accessTokent", token);
            localStorage.setItem("role", response?.user?.role);
            if (response.user.role === 'admin') {
              console.log('admin');
            this.toastor.success(response.message);
             
            }
            else {
              console.log('member');
            this.toastor.success(response.message);

            }
          }
        },
        (error: any) => {
          // Xử lý lỗi trong quá trình đăng nhập
          // console.log(error);
          this.toastor.error('Đã a có lỗi xảy ra, vui lòng thử lại sau', 'Đăng nhập thất bại');
        }
      );
    }
  }
  // token(arg0: string, token: any) {
  //   throw new Error('Method not implemented.');
  // }
}
