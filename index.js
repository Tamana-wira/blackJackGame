// // let age=22;

// // if(age<22){
// //     console.log("you are not old enough to enter");
// // }
// // else{
// //     console.log("welcome");
// // }
// // // 
// // let decribe=["Tamana",28,true]
// // decribe.push("wira")
// // console.log(decribe[3])
// // let messages=["Hey hi","how are you","all good being working with you"]
// // let newMessage="same here"
// // messages.push(newMessage);
// // messages.pop()
// // console.log(messages[3])
// // let lastItem=messages.pop();
// // console.log(messages[2])
// // for(let i=10; i<101; i+=10){
// //     console.log(i)
// // }
// //........................For Loop..........................................

// // let igreeting=[
// //     "hi",
// //     "hey",
// //     "thanks"
// // ]
// // for(let i=0;i<igreeting.length;i++){
// //     let newgreet=igreeting[i];
// //     console.log(newgreet);
// // }
// // let card=[7,3,9];
// // for(i=0;i<card.length;i++){
// //     // currentcard=card[i]
// //     console.log(card[i])

// // }
// //....................................Rendering from Html...........................


// // let sentence=["heelo","My","Name","is","Tamana"]
// // let greetingE1=document.getElementById("greeting-el")


// // // // greetingE1.textContent="bye";
// // // // console.log(greetingE1)


// // for(i=0;i<sentence.length;i++){
// //     greetingE1.innerHTML +=sentence[i]+" "
    
// // }
// // console.log(greetingE1)

// //.........................................Random Numbr fUCTION.................


// // console.log(Math.random()*6);
// //................................................Math.floor..........
// // console.log(Math.floor(Math.random()));

// // let rollDice=()=>{
// //     console.log( Math.floor (Math.random())+1);

// // }
// // rollDice()
// //...................................Logical and.................................

// // let hasSolvedChallenge = false;
// // let hasHintLeft=false;

// // if(hasSolvedChallenge!==false && hasHintLeft!==false){
// //     console.log("showing the soloution")}

// //     else{
// //         console.log("here you are")
// //     }

// //...............................Object................................................................

// // let title=document.getElementById("player");


// // let player={
// //     Name:"Tamana",
// //     Chipset:10
// // }

// // title.textContent=player.Name+" "+player.Chipset;
// // console.log(title);


// // let onbi={
// //     isCalm:true,
// //     castleName:"DarulAman",
// //     rooms:5,
// //     roomType:["kingsRoom","Queen Room","ordinary"]

// // }
// // console.log(onbi.roomType[2])
// //.................................Practice................................
// // let person={
// //     name:"Tamana",
// //     age:28,
// //     country:"Afghanistan"
// // }
// // let logData=()=>{
// //     console.log(person.name +" "+person.age+" "+"and"+"she live in"+person.country)
// // }
// // logData();
// //............if practice.....


// // let age=85;
// // if(age<5){
// //     console.log("Free")
// // }
// // else if(age>6 && age<17){
// //     console.log("chile discount")
// // }
// // else if(age >18 && age<26){
// //     console.log("student discount")
// // }
// // else if(age>26 && age<65){
// //     console.log("full price")
// // }
// // else{
// //     console.log("senior discount")
// // }
// //....................................................for loop..............

// // let largeCountries=["China","india","usa","indonesia","Canada"];
// // largeCountries.shift("afghanistan")
// // console.log(largeCountries)

// // //the 5 largesst countries in the world :
// // //China, 
// // //--India
// // //-
// // //-

// // for(i=0;i<largeCountries.length;i++){
// //     console.log("The 5 largest countries are :"+" "+largeCountries[i])
// // }

// // let hand=["rock","paper","sessior"]

// // let random=()=>{
// //     //for(i=0;i<hand.length;i++)
// //    // console.log(Math.floor(Math.random()*3))
// //  return hand[Math.floor(Math.random()*3)]
// // //  let result=Math.floor(Math.random()*3)
// // //  return hand[result]
// // }
// // random()
// // let randomF=()=>{
// //     let random=(Math.floor(Math.random()*3));
// //     return hand[random]

// // }
// // console.log(randomF())

// //.......................................

// let fruits=["apple","orange","apple","apple","orange"];



// let appleShelf=document.getElementById("appleEl");
// let orangeShel=document.getElementById("orangEl");



// let apples=()=>{

//     for(i=0;i<fruits.length;i++){
//         if(fruits[i]==="apple"){
//            appleShelf.textContent+="apple"+" ";
    
//         }
//         else{
//             orangeShel.textContent+="Orange"+" ";
//         }
//     }

// }

// apples()..
//............................................New PROJECT............


// let clickbtn=()=>{
//     console.log("button click")
// }
// // let btnEl=document.getElementById("input-btn");
// let texBox=document.getElementById("textBox");

// // btnEl.addEventListener("click", ()=>{
// //     console.log("btn clicke from event listner")
// // })
// texBox.addEventListener("click",()=>{
//     console.log("texts added")
// })
//.........................Rendering ...................................

// let myLeads=["www.google.com","ww.abc.com","www.yahoo.com"];

// let inputEl=document.getElementById("inputEl")
// // console.log(inputEl)
// let btnEl=document.getElementById("input-btn");
// let ulEl=document.getElementById("ul-El");

// let containerEl=document.getElementById("container")




//run for loops when page is rendered
// for(let i=0;i<myLeads.length;i++){
//     console.log(myLeads[i])
//    // ulEl.innerHTML+="<li>"+myLeads[i]+"</li>"+ "       "
//     // console.log(myLeads[i])

//     let listEl=document.createElement("li")
//     listEl.innerHTML=myLeads[i]
//     containerEl.appendChild(listEl)
// }



//when changin input value..

// inputEl.addEventListener("change", (e)=>{
//     console.log(e.target.value)
// })

//second way of change event listner
// inputEl.onchange= (e)=>{
//     console.log(e.target.value)
// }


//when click on button
// btnEl.addEventListener("click", ()=>{
//     myLeads.push(inputEl.value)
//     //adding li elements to conainer
//     let listEl=document.createElement("li")
//     listEl.innerHTML=inputEl.value
//     containerEl.appendChild(listEl)

//     inputEl.value = ""

//     console.log(myLeads)
// })


// containerEl.innerHTML="<button id='but-btn' Onclick='Buy()'> Buy</button>"+" "

// let Buy=()=>{
//     containerEl.innerHTML+="<p>it's paragraph</p>"
// }
// let container=document.getElementById("container");
// // console.log(container)
// let btnE=document.getElementById("input-btn");
// // console.log(btnE)
// let input= document.getElementById("inputEl")
// // console.log(input)
// container.innerHTML="<button Ocnclick='clicked()'>click me</button>"
// // console.log(container.innerHTML);
// function clicked(){
    
//     container.innerHTML="<p>Thank you</p>"
    
// }
//.......................................TEMPLATE STRING................

// const resp="jaes";
// // const email=`hey ${resp} how are you`;
// // console.log(email)

// let sender="Tamana";
// const email=`Hey ${resp}
//             how it's going? cheers
//              ${sender}`
// console.log(email)

//.........................................ADDING DYNAMIC PARAMETERS TO FUNCTIONS.........................

// let welcomeEl=document.getElementById("welcomeEl");

// let myfuc=(greeting,name)=>{
//     welcomeEl.textContent=`${greeting} ${name}`;
// }
// myfuc("hello ","sadaf")

// function add(Numberone,NumberTwo){
//    return NumberTwo + Numberone

// }
// console.log(add(9,102))
// console.log(add(2,4))

// function getFirstArr (myarray){
        
//         // for(i=0;i<myarray.length; i++)
//         return myarray[0];
// }
// console.log(getFirstArr([1,2,3]));
// console.log(defineit)
//............................................

let saveEl=document.getElementById("save-btn");

const tabs=[
    {url:"fb.com"}
]

saveEl.addEventListener("click", (myObj)=>{
    console.log(tabs[0].url)

})

