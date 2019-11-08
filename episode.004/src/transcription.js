import { throws } from "assert"

export default function transcription(name) {  
    var seq =''
    for(let i = 0 ; i < name.length ; i++){
        if(name[i] === 'G'){
            const C = 'C'
        } 
        else if(name[i] === 'C'){
            const G = 'G'
        } 
        else if(name[i] === 'T'){
            const A = 'A'
        }
        else if(name[i] === 'A'){
            const U = 'U'
        }
        else{
            throw `Nucleotide ${name} does not exist`      
        }
        
        
    
    }


  
   
  }
