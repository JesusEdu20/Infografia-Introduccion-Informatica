import { binaryObject } from "./binaryObject.js";
import {objectSend} from "./sendToDom.js";
import {binaryToStringObject} from "./traslateString.js"


//test with the object evaluate
import { evaluateInput } from "./evaluateInput.js";


//
import {translator} from "./translator.js";
//
let binary=new binaryObject;
let send= new objectSend;
let binaryToString= new binaryToStringObject;





//const base=97;
let arrayBinary=[]

//recuerda base 32
const ASCII=[{name:" "},{name:"!"},{name:""},{name:"#"},{name:"$"},{name:"%"},{name:"&"},{name:""},{name:"("},{name:")"},{name:"*"},{name:"+"},{name:","},{name:"-"},{name:"."},{name:"/"},{name:"0"},{name:"1"},{name:"2"},{name:"3"},{name:"4"},{name:"5"},{name:"6"},{name:"7"},{name:"8"},{name:"9"},{name:":"},{name:";"},{name:"<"},{name:"="},{name:">"},{name:"?"},{name:"@"},{name:"A", value:97},{name:"B", value:98},{name:"C", value:98},{name:"D", value:98}, {name:"E", value:98}, {name:"F", value:98}, {name:"G", value:98}, {name:"H", value:98}, {name:"I", value:98}, {name:"J", value:98}, {name:"K", value:98}, {name:"L", value:98}, {name:"M", value:98}, {name:"N", value:98}, {name:"O", value:98}, {name:"P", value:98}, {name:"Q", value:98}, {name:"R", value:98}, {name:"S", value:98}, {name:"T", value:98}, {name:"U", value:98}, {name:"V", value:98}, {name:"W", value:98}, {name:"X", value:98}, {name:"Y", value:98}, {name:"Z", value:98},{name:"["},{name:""},{name:"]"},{name:"ʌ"},{name:"_"},{name:""},{name:"a", value:97},{name:"b", value:98},{name:"c", value:98},{name:"d", value:98}, {name:"e", value:98}, {name:"f", value:98}, {name:"g", value:98}, {name:"h", value:98}, {name:"i", value:98}, {name:"j", value:98}, {name:"k", value:98}, {name:"l", value:98}, {name:"m", value:98}, {name:"n", value:98}, {name:"o", value:98}, {name:"p", value:98}, {name:"q", value:98}, {name:"r", value:98}, {name:"s", value:98}, {name:"t", value:98}, {name:"u", value:98}, {name:"v", value:98}, {name:"w", value:98}, {name:"x", value:98}, {name:"y", value:98}, {name:"z", value:98},{name:"{"},{name:"|"}, {name:"}"}]

/*Variables from DOM*/


 const writeBox=document.querySelector(".input-to-write");
 const sendBox=document.querySelector(".input-to-send");
 const screen=document.querySelector(".reel--right");
 const responseScreen=document.querySelector(".reel--left");
 let test=document.querySelector(".interactive-chat-screen")

 const switchTraslator=document.getElementById("switch-traslator__input");
 

 /*Oyente*/
 switchTraslator.addEventListener("click", (e)=>{
    if(switchTraslator.value=="on"){
        switchTraslator.value="off";
        console.log(switchTraslator.value);
    }

    else if(switchTraslator.value=="off"){
        switchTraslator.value="on";
        console.log(switchTraslator.value);
    }

 });

 sendBox.addEventListener("click", ()=>{const message=writeBox.value;

    //prepare the message
    let messageArray=message.split("");
    

    //Step 1 evaluate the request
    //look for the input
    //evaluateInput.evaluate();

    //Step 2 create a condition to switch the translator

    if(evaluateInput.evaluate(switchTraslator)=="binary"){
        //binary TRANSLATOR;
        const binaryMessageTraslted= translator.translate(messageArray, 32, ASCII, binary, binaryToString)

        send.lookElement(message,screen)
    
        send.lookElement(binaryMessageTraslted,responseScreen,true);
   
    }

    else if(evaluateInput.evaluate(switchTraslator)=="text"){

        //text TRANSLATOR
        let textMessage=translator.translateToTex(message, ASCII, 32, binary.binaryToDec);
        console.log(textMessage);

        send.lookElement(textMessage,screen)
    
        send.lookElement(message,responseScreen,true);

    }
    

    
   
   //sending Message
    
 
         
}

 
)
// Enter

















// Object translator

 /*messageArray.map(
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
    )*/




















 
 /*

function traslate( messageArray ){

    let binaryMessageTraslted;
    let binaryMessage=[]
    
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
}




traslate(["h","o","l","a"]);


*/
