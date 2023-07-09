// let age=22;

// if(age<22){
//     console.log("you are not old enough to enter");
// }
// else{
//     console.log("welcome");
// }
// // 
// let decribe=["Tamana",28,true]
// decribe.push("wira")
// console.log(decribe[3])
// let messages=["Hey hi","how are you","all good being working with you"]
// let newMessage="same here"
// messages.push(newMessage);
// messages.pop()
// console.log(messages[3])
// let lastItem=messages.pop();
// console.log(messages[2])
// for(let i=10; i<101; i+=10){
//     console.log(i)
// }
//........................For Loop..........................................

// let igreeting=[
//     "hi",
//     "hey",
//     "thanks"
// ]
// for(let i=0;i<igreeting.length;i++){
//     let newgreet=igreeting[i];
//     console.log(newgreet);
// }
// let card=[7,3,9];
// for(i=0;i<card.length;i++){
//     // currentcard=card[i]
//     console.log(card[i])

// }
//....................................Rendering from Html...........................


// let sentence=["heelo","My","Name","is","Tamana"]
// let greetingE1=document.getElementById("greeting-el")


// // // greetingE1.textContent="bye";
// // // console.log(greetingE1)


// for(i=0;i<sentence.length;i++){
//     greetingE1.innerHTML +=sentence[i]+" "
    
// }
// console.log(greetingE1)

//.........................................Random Numbr fUCTION.................


// console.log(Math.random()*6);
//................................................Math.floor..........
// console.log(Math.floor(Math.random()));

// let rollDice=()=>{
//     console.log( Math.floor (Math.random())+1);

// }
// rollDice()
//...................................Logical and.................................

// let hasSolvedChallenge = false;
// let hasHintLeft=false;

// if(hasSolvedChallenge!==false && hasHintLeft!==false){
//     console.log("showing the soloution")}

//     else{
//         console.log("here you are")
//     }

//...............................Object................................................................

// let title=document.getElementById("player");


// let player={
//     Name:"Tamana",
//     Chipset:10
// }

// title.textContent=player.Name+" "+player.Chipset;
// console.log(title);


// let onbi={
//     isCalm:true,
//     castleName:"DarulAman",
//     rooms:5,
//     roomType:["kingsRoom","Queen Room","ordinary"]

// }
// console.log(onbi.roomType[2])
//.................................Practice................................
let person={
    name:"Tamana",
    age:28,
    country:"Afghanistan"
}
let logData=()=>{
    console.log(person.name +" "+person.age+" "+"and"+"she live in"+person.country)
}
logData();