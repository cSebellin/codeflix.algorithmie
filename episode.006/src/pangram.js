export default function spaceAge(pangram) {
    const set = new Set()
    const min = pangram.toLowerCase()
    for(let i = 0 ; i < min.length ; i++){
        const regex = /[a-zA-Z]/
        if(min[i].match(regex)){
            set.add(min[i])
        } 
        
        
    }
    if(set.size  === 26){
        return true
    }
    
        return false
    
}