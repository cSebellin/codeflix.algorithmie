export default function spaceAge(planet,number) {  
    var time = ''
    let earth = number/31557600
        if(planet == "Earth"){
            time = earth 
        }
        if(planet == "Mercury"){
            time = earth/0.2408467
        }
        if(planet == "Venus"){
            time = earth/0.61519726
        }
        if(planet == "Mars"){
            time = earth/1.8808158
        }      
        if(planet == "Jupiter"){
            time = earth/11.862615
        }   
        if(planet == "Saturn"){
            time = earth/29.447498
        }   
        if(planet == "Uranus"){
            time = earth/84.016846
        }
        if(planet == "Neptune"){
            time = earth/164.79132
        }
             
    return parseFloat(time.toFixed(2))

  }
