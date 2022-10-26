//parameters
/*
1.messageArray: message taken from the input-text turned into speech
2.base
3.ASCII
4.Binary: methods
5.binaryToString: methods
*/


export  const translator={


    traslate( messageArray, base=32, ASCII, binary, binaryToString){

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
}

}






