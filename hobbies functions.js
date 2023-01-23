/*
createHobbies("alergat")

function createHobbies (ceva) {
    let hobbies = [];
    hobbies.push(ceva)
    console.log(hobbies)
}


let hobbies = ["basket", "ceva", "volei"];

updateHobbies("ceva" , "bowling");

function updateHobbies(hobby, newHobby){
    for(let i = 0; i < hobbies.length; i++){
        if(hobbies[i] === hobby){
            hobbies.splice(i,1, newHobby);
        }
    }
}

console.log(hobbies);
*/

let hobbies = ["basket", "fotbal", "handbal"];

deleteHobbies("fotbal");

function deleteHobbies(hobby){
    for(let i = 0; i < hobbies.length; i++){
        if(hobbies[i] === hobby){
            hobbies.splice(i,1);
        }
    }
}
console.log(hobbies)
