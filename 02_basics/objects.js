// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
 console.log(JsUser.lastLoginDays[0])
//  console.log(typeof JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
//  JsUser.email = "hitesh@microsoft.com"
//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    console.log(`location, ${this.location}`);
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${[this["full name"]]}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());