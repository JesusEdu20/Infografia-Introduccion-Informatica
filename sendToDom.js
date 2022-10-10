export class objectSend
{
    constructor()
    {
        
        
    }

     lookElement= function(message,ubicationMessage,mensajeRespuesta)
    {

            let classMessage= (mensajeRespuesta==true)?"res-message":"message-input"
            

            let elementDiv= document.createElement("div");
            let pElement=document.createElement("p");
            var textoParrafo = document.createTextNode(message);
            ubicationMessage.appendChild(elementDiv);
            elementDiv.appendChild(pElement);
            pElement.appendChild(textoParrafo);
            
            
            elementDiv.classList.add(classMessage);
            pElement.classList.add("input-message");
           
            
            //experimental

            //elementDiv.style.marginTop=height

           

        

      
    }


   
}


