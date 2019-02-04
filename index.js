function sayHello(){
    console.log('Julia')
}
sayHello()

let obj = {
    firstname:"",
    lastname:"",
    

    setName: function(name){
        this.firstname = name;
    },

    getName: function(){
        return this.firstname
    },

    setLastName: function(name){
        this.firstname = name;
    },

    getLastName: function(){
        return this.firstname
    },
    hello: function(){
        console.log(`Hello, ${this.firstname} ${this.lastname}`)
    }
}

obj.setName('Julia')
obj.hello()

// function givemePI(number){
//     let a = number*3,14;
//     console.log(givemePI)
// }
// givemePI(10)