import { Injectable } from "@angular/core";

import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class UserService {

    private USERS_DATABASE = "/users";
    userKey: string;
    userName: string;

    constructor(private afDB: AngularFireDatabase){

    }

    verifyUser(userKey: string): Promise<any>{
        let promise = new Promise((resolve, reject) => {
            this.afDB.list(this.USERS_DATABASE+"/"+userKey.toLocaleLowerCase()).subscribe(
                (data) => {
                    let result: boolean;
                    if(data.length == 0){
                        console.warn("Key is not correct!!");
                        result = false;
                    }else{
                        this.userKey = userKey;
                        console.log(data[0].$value);
                        this.userName =data[0];
                        console.log("Correct Key Value for user ["+this.userName+"]");
                        result = true;
                    }
                    resolve(result);
                }
            );
        });

        return promise;
        
    }
}