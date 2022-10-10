export class binaryToStringObject{
    constructor()
    {

    }

    resultToString(result){
        let bytes=""
        result.map(
            element=>{
                
                 element.map(
                    bit=>{
                        console.log(bit)
                        bytes+=bit
                       
                        console.log (bytes)
                    }
                 )
                
                 bytes+=" "
                    
                
            }
        )
         return bytes
    }
}


