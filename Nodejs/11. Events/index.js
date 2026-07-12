import EventEmitter from "node:events";

// create instance of the event
const customEmmiter = new EventEmitter()

// 1 on: listen and register for an event
// 2 once: listen and register for an event (fires only once)
// 3 emit: emit/call a event

// customEmmiter.on("response",(name,age)=>{
//     console.log(`username:${name} age:${age}`);
// });

// customEmmiter.emit("response","mau0",19);
// customEmmiter.emit("response","mau1",20);
// customEmmiter.emit("response","mau2",21);


customEmmiter.once("response",(name,age)=>{
    console.log(`username:${name} age:${age}`);
});

customEmmiter.emit("response","mau0",19);
customEmmiter.emit("response","mau1",20);
customEmmiter.emit("response","mau2",21);