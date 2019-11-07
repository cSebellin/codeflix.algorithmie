export default function spaceAge(planet,number) {  
    let time = ''
    if(planet = "Earth"){
        const earth = number/31557600
        time = earth 
    }
    else if(planet = "Mercury"){
        time = earth*0.2408467
    }
    
    return parseFloat(time.toFixed(2))

  }
