import { Component, EventEmitter, Output } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker";
import { AccountService } from "src/app/_services/account";

@Component({
    selector: 'register',
    templateUrl:'./register.html',
    styleUrls: ['./register.css']
})

export class Register {
    registerForm: FormGroup = new FormGroup({

    });

    cities: string[] = ['Dhaka', 'Rajshahi', 'Khulna']; // Sample cities array
    bsConfig: Partial<BsDatepickerConfig>;
    maxDate = new Date();

    constructor(
        private fb: FormBuilder,
        private accountService: AccountService) {
            //this.initializeForm();
            this.bsConfig = {
                containerClass:'theme-red',
                dateInputFormat: 'DD MMMM YYYY'
              };
              console.log('bsConfig:', this.bsConfig); // Debugging
        }

    ngOnInit(): void {
        this.initializeForm();
        this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
        console.log('maxDate:', this.maxDate);
    }

    initializeForm() {
        this.registerForm = this.fb.group({
            userName: ['',Validators.required],
            gender: ['male'],
            knownAs: ['',Validators.required],
            password: ['',[
                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(8)
            ]],
            country: ['',Validators.required],
            city: ['',Validators.required],
            dateOfBirth: ['',Validators.required],

        })
    }

    // Handle city change event
    onCityChange(selectedCity: string): void {
      console.log('Selected City:', selectedCity);
      // You can also update other form controls or perform additional logic based on the selected city
    }

    onDatetimeChange(selectedDatetime: Date): void {
        console.log('Selected Datetime:', selectedDatetime);
      }

    
    register() {
        const dob = this.getDateOnly(this.registerForm.controls['dateOfBirth'].value);
        const values = {...this.registerForm.value, dateOfBirth: dob};

        console.log('Register Form Submitted', this.registerForm);

        this.accountService.register(this.registerForm)
    }

    private getDateOnly(dob: string | undefined) {
        if(!dob) return;
        let theDob = new Date(dob);
        return new Date(theDob.setMinutes(
          theDob.getMinutes()-theDob.getTimezoneOffset()
          )).toISOString().slice(0,10);
    
      }
}