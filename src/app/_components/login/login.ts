import { Component } from "@angular/core";
import { AccountService } from "src/app/_services/account";

@Component({
    selector: 'login',
    templateUrl:'./login.html',
    styleUrls: ['./login.css']
})

export class Login {
    model = {
        userName: '',
        password: ''
      };
    constructor(public accountService: AccountService) {

    }

    login(){
        
        // Implement your login logic here
        console.log('Login Form Submitted', this.model);
        // For example: call a service to authenticate the user
        this.accountService.login(this.model)
        
    }
}