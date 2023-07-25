//object are in key value pair
/*var person={
    firstname:"MS",
    lastname:"Dhoni",
    Age:48,
    Car:false

};

console.log(person)

//dot notation

console.log(person.Age)

//bracket notation 

console.log(person['firstname'])*/

var Prasanna={
    firstName:"Prasanna",
    SecondName:"K M",
    age : 20,
    isAverage:true,

friends:["Rubin","Hari","saravanan"],
address:{
    State:"TN",
    city:{
        name:"Namakkal",
        pincode: 637014
    }
}
}
console.log(Prasanna.friends)
console.log(Prasanna.friends[1])
console.log(Prasanna.address)
Prasanna.isAverage=false
console.log(Prasanna)
delete Prasanna.age
console.log(Prasanna)
