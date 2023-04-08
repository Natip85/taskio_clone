import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FieldErrorComponent } from './field-error/field-error.component';
import { LoginPageComponent } from './login-page/login-page.component';



@NgModule({
    declarations: [
        SignupPageComponent,
        FieldErrorComponent,
        LoginPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        SignupPageComponent
    ]
})
export class AuthModule { }
