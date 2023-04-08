import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/api.service';
import { LoggerService } from 'src/app/core/logger.service';

@Component({
    selector: 'app-signup-page',
    templateUrl: './signup-page.component.html',
    styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements AfterViewInit {
    // nameField = '';

    // formValid(): boolean {
    //     return (this.nameField.length >= 2);
    // }

    constructor(
        private logger: LoggerService,
        private api: ApiService,
        private router: Router
    ) { }

    @ViewChild('nameFieldRef') nameField!: ElementRef;

    signupForm = new FormGroup({
        name: new FormControl('', {
            validators: [Validators.required, Validators.maxLength(20)]
        }),
        email: new FormControl('', {
            validators: [Validators.required, Validators.email]
        }),
        password: new FormControl('', {
            validators: [Validators.required, Validators.minLength(6)]
        })
    })

    ngAfterViewInit(): void {
        this.logger.log('ngAfterViewInit');
        // console.log('ngAfterViewInit');
        this.nameField.nativeElement.focus();
    }

    getFieldControl(field: string): FormControl {
        return this.signupForm.get(field) as FormControl;
    }

    onSubmit() {
        if (this.signupForm.invalid) {
            return;
        }

        console.log(this.signupForm.value);

        this.api.signup(this.signupForm.value).subscribe({
            next: (data) => {
                this.router.navigate(['login']);
            },
            error: (err) => console.log(err)
        })
    }


}
