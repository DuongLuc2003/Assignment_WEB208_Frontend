import { FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.scss']
})
export class SinginComponent {

  constructor(
    private userservice: UserService,
    private fb: FormBuilder,
    private toastor: ToastrService,
    private router: Router
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
      console.log(User);
      this.userservice.singin(User).subscribe(
        // data=>console.log('data')
        (response:any) => {
          // console.log(response.user.role,response);
          if (!response.user) {
            this.toastor.error(response.message);
            console.log(response.message);
            
          }
          else {
            const token: any = response.accsestoken
            localStorage.setItem("accessTokent", token);
            localStorage.setItem("role", response?.user?.role);
            if (response?.user.role === 'admin') {
              console.log('admin');
            this.toastor.success(response.message);
            this.router.navigate(['/admin']);
            }
            else {
              console.log('member');
            this.toastor.success(response.message);
            this.router.navigate(['']); 
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
