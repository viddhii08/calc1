let buttons = document.querySelectorAll("btn");
let H1 =document.querySelector("h1");
let str =""
buttons.foreach((value)=>{
    value.addEventListener(click,function add(){
        if(value.innerText!="="){
            str +=value.innerText
            h1.innerText=str
        }else{
            h1.innerText = eval(str)
            str=""
        }
    })
})