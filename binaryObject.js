

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

    binaryToDec(binary){
        let position=binary.length-1; //(length-1)to include the zero in the last iteration
        const convert= binary.map((v)=>{ let power=2**position; position-=1; return v*power; })
        .reduce((preV, v )=> preV+v);
        
        return convert
    }
}













/*
function convert(binary){
    const dec=binary.map((v, index)=>
        {index*2})
}
*/ 


/*function convert(binary){
    let position=binary.length-1;
    const convert= binary.map((v, index)=>{ let power=2**position; position-=1; return v*power})
    .reduce((preV, v )=> preV+v);
    
    return convert
}

let result= convert([1,1,0,1,1]);
console.log(result)*/

/*reduce((preV, v )=> {preV*v});
    return dec*/

/*const binaryToDec={

    convert:(binary)=>{
        let position=binary.length-1;
        const convert= binary.map((v, index)=>{ let power=2**position; position-=1; return v*power})
        .reduce((preV, v )=> preV+v);
        
        return convert
    }
}*/