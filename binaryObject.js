

export class binaryObject{
    constructor(){
    

    }

    convertToBinary(dec){
        
        const arrayBinary=[]

       do{
            let rest=dec%2  
          dec/=2
          dec=Math.floor(dec)
         
        
         
          
         
        
          arrayBinary.unshift(rest)  
       }
       while(dec!==0);

       return arrayBinary

    }
}





