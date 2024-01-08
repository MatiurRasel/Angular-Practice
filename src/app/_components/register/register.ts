import { Component } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'register',
    templateUrl:'./register.html',
    styleUrls: ['./register.css']
})

export class Register {
    registerForm: FormGroup = new FormGroup({

    });
    maxDate: Date = new Date();
    validationErrors: string[] | undefined;

    constructor(private toastr: ToastrService,
        private fb: FormBuilder,
        private router: Router) {

        }

    ngOnInit(): void {
        this.initializeForm();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
    }

    initializeForm() {
        this.registerForm = this.fb.group({
            userName: ['',Validators.required],
            gender: ['male'],
            knownAs: ['',Validators.required],
            dateOfBirth: ['',Validators.required],
            city: ['',Validators.required],
            country: ['',Validators.required],
            password: ['',[
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(8)
            ]],
            confirmPassword: ['', Validators.required,
            this.matchValues('password')]
        })

        this.registerForm.controls['password'].valueChanges.subscribe({
            next: () => this.registerForm.controls['confirmPassword']
                .updateValueAndValidity()
        })
    }

    matchValues(matchTo: string): ValidatorFn {
        return (control: AbstractControl) => {
            return control.value === control.parent?.get(matchTo)?.value 
                ? null : { notMatching: true}
        }
    }

    register() {
        const dob = this.getDateOnly(this.registerForm.controls['dateOfBirth'].value);
        const values = {...this.registerForm.value, dateOfBirth: dob};

        console.log(values);
    }

    private getDateOnly(dob: string | undefined) {
        if(!dob) return;
        let theDob = new Date(dob);
        return new Date(theDob.setMinutes(
          theDob.getMinutes()-theDob.getTimezoneOffset()
          )).toISOString().slice(0,10);
    
      }
}