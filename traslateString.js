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
                        
                        bytes+=bit
                       
                        
                    }
                 )
                
                 bytes+=" "
                    
                
            }
        )
         return bytes
    }
}


