
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

