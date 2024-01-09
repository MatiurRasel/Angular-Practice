import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })

export class AccountService {
    constructor(
        
    ) {

    }

    login(model: any) {
        console.log('Login Form Submitted  To API: ', model);
    }
    
    register(model: any){
        // console.log("Register Values Pass From Html To API: " + model);
        console.log('Register Form Submitted  To API: ', model);
    }
}