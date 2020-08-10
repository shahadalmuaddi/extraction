class Student{
    constructor(id,firstName,lastName,DoB){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.DoB=DoB;
    }
    get fullName(){
     return `${this.firstName} ${this.lastName}`;   
    }
    set fullName(value){
      let result=value.split(' ');
      if(result[0]==="Saleh")
      console.log("invalid name");
      this.firstName=result[0];
      this.lastName=result[1];
    }
    get email(){
        return `${this.id}@u.edu.sa`;   
       }
       get age(){
        let currentYear = new Date().getFullYear();
        return currentYear-this.DoB;   }    
}
class MathStudent extends Student{
    constructor(path,id,firstName,lastName,DoB){
        super(id,firstName,lastName,DoB);
        this.path=path;
    }
}
let sara = new Student(1,"Sara","Ali",1998)
let sami = new MathStudent("algebra",1,"Sami","Ahmed",1996)
