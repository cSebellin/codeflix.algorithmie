export default function bob(bob){
    let responds = ''
    switch(bob){
        
        case 'How are you ?' :
                responds = 'Sure';
                break;
        case 'Hey !' :
                responds = 'Whoa, chill out!';
                break;
        case 'Bob' :
                responds = 'Fine. Be that way!' ;
                break;           
        default :
                responds = 'Whatever';        
    }
        
    return responds      
    
}