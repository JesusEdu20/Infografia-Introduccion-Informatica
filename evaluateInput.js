export class evaluateInput{
    constructor(){

    }

    static evaluate(inputTarget){
        let value=inputTarget.value;

        if(value=="on"){
            value="off"
            
            return "binary"
            
        }

        else if (value=="off"){
            value="on"
            
            return "text"
           
            
        }
        
    }
}

//inicial value "on"