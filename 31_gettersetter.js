class user
{
    constructor(email,pass){
        this.email=email;
        this.pass=pass;
    }

    get pass(){
        return this._pass+456;

    }
    set pass(p){
        this._pass=p;
    }
}

const u1=new user('sam@gamil',123);
console.log(u1.pass);

