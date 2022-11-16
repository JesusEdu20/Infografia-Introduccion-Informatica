//parameters
/*
1.messageArray: message taken from the input-text turned into speech
2.base: to calculate the dec position of the character in the ASCII table  
3.ASCII: Ascii Table
4.Binary: Object with the methods (convertToBinary/ binaryToDec);
5.binaryToString: methods
*/




export  const translator={


    translate( messageArray, base=32, ASCII, binary, binaryToString){

    let binaryMessageTraslted;
    let binaryMessage=[];
    let texto;
    
    messageArray.map(
        letter=>{
            texto=letter;
            let  er= new RegExp(texto);
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
    return binaryMessageTraslted
},


 translateToTex(message, ASCII, base=32, binaryToDec){

    let messageTranslated="";
    const arrayMessage=message.split(" ");
    
    arrayMessage.map((byte)=>{
            
            const arrayBytes=byte.split("");
            const bytesNumberArray=arrayBytes.map((bit)=>{
               return parseInt(bit)
            })
            console.log(bytesNumberArray)
            let dec= binaryToDec(bytesNumberArray);
            let index=dec-base;
           
            messageTranslated+=ASCII[index].name;

    })

    
    console.log(messageTranslated)

    return messageTranslated
 }

 

}






