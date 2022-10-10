import {binaryObject} from "./binaryObject.js"
import {objectSend} from "./sendToDom.js";
import {binaryToStringObject} from "./traslateString.js"
let binary=new binaryObject;
let send= new objectSend;
let binaryToString= new binaryToStringObject;


const base=97;
let arrayBinary=[]


const ASCII=[{name:"a", value:97},{name:"b", value:98},{name:"c", value:98},{name:"d", value:98}, {name:"e", value:98}, {name:"f", value:98}, {name:"g", value:98}, {name:"h", value:98}, {name:"i", value:98}, {name:"j", value:98}, {name:"k", value:98}, {name:"l", value:98}, {name:"m", value:98}, {name:"n", value:98}, {name:"o", value:98}, {name:"p", value:98}, {name:"q", value:98}, {name:"r", value:98}, {name:"s", value:98}, {name:"t", value:98}, {name:"u", value:98}, {name:"v", value:98}, {name:"w", value:98}, {name:"x", value:98}, {name:"y", value:98}, {name:"z", value:98}]

/*Variables from DOM*/


 const writeBox=document.querySelector(".input-to-write");
 const sendBox=document.querySelector(".input-to-send");
 const screen=document.querySelector(".reel--right");
 const responseScreen=document.querySelector(".reel--left");
 let test=document.querySelector(".interactive-chat-screen")
 

 /*Oyente*/
 sendBox.addEventListener("click", ()=>{const message=writeBox.value;
    let binaryMessageTraslted;
    let binaryMessage=[]
    let messageArray=message.split("");
    
    let texto;
   
    messageArray.map(
        letter=>{
            texto=letter;
            let  er= new RegExp(texto, "i");
            for(let i=0; i<ASCII.length; i++){
                let element=ASCII[i].name
               
                if(er.test(element)){
                   let num=i;
                   let dec=num+base;
                   let result=binary.convertToBinary(dec);

                   binaryMessage.push(result)
                    //enviar al dom
                    
                    binaryMessageTraslted = binaryToString.resultToString(binaryMessage)
                }

                else{
                
                    console.log("err");
                }

            }

              
        }
    )

    send.lookElement(message,screen)
    //let heightMessage=document.querySelector(".message-input")
    /*console.log(heightMessage)
    let height=heightMessage.clientHeight*/
    send.lookElement(binaryMessageTraslted,responseScreen,true)
    /*test.scroll({top:0, behavior: "smooth"})*/
         
}

 
)
    

 
    






