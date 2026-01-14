// events in js --> the changeing the state of an obj is known as a event event are fired to notify code of "intreasting" that may affect code execution
// . mouse event(click,doubleclick etc)
// .keyboard events(keyprees,keyup,keydown)
//.fromevents(submit ,etc..)
//. pribtevent&many more
// events handling in js .
//node.event=()=>{
    // handle here
    //}

//  let btn1=document.querySelector('#btn1')
// btn1.onclick=(evt)=>{
//     console.log(evt.type);
//      console.log(evt.type);
//        console.log(evt.target);
//        console.log(evt.clientX,evt.clientY);
// btn1.addEventListener('click',(evt)=>{
// console.log('button 1 was clicked - handler1');
// console.log(evt.type,evt.target)
// // console.log(evt.target)
// console.log(evt.clientX,evt.clientY)
//})


//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a)
// }

//  btn1=document.querySelector('div');
// box.onmousemove=(evt)=>{
//     console.log(evt.type);
//      console.log(evt.type);
//        console.log(evt.target);
//        console.log(evt.clientX,evt.clientY);
    

 //   console.log('you are inside div') // always ist proirty give js code
//}

    // console.log(evt.type,evt.target,evt.clientX,evt.clientY)

// events obj -->  it is a special obj that has  details about the event.
// all events hanflers have access to the event obj's properties and methods 
//Node.event= (e)=>{
    //handle here
    //}
    // e.target,e.type,e.client,e.clinty.
// event listeners
//Node.addeventlistener(event,callback)'node.removeEventlistener(event,callback)
//*Note--> the callback refrence should be same to remove

// remove and add event
// let btn1=document.querySelector('#btn1')
// btn1.addEventListener('click',(evt)=>{
// console.log('button 1 was clicked - handler1');
// });
// btn1.addEventListener('click',()=>{
//         console.log('button 1 was clicked -handler2');
// });

// const handler3=()=>{
//     console.log('button 1 was clicked -handler3');
// };
// btn1.addEventListener('click',handler3);

// btn1.addEventListener('click',()=>{
//         console.log('button 1 was clicked -handler4');
// });

//  btn1.removeEventListener('click',handler3);

// practice set1
//q1

// let mode=document.querySelector('#mode');
// let currentmode='lightmode';
// let body=document.querySelector("body");
// mode.addEventListener('click',()=>{
//     if(currentmode==='lightmode'){
//         currentmode='dark'
//        body.classList.add('dark')
//        body.classList.remove('light')


//     } else{currentmode='lightmode'
//     body.classList.add('light')
//     body.classList.remove('dark')

//     }
//     console.log(currentmode)
// });

// home work
bg=document.querySelector("div")
let back="red"
// div=document.querySelector('div')
bg.addEventListener('mouseover',()=>{
    if( back==='red'){
        back="yellow"
bg.classList.add('yellow')
bg.classList.remove('red')

    }
    else{
        back="red"
        bg.classList.add('red')
bg.classList.remove('yellow')

    }
    console.log(back)
})
