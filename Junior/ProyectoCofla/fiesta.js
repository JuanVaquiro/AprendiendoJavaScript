let free = false;

const validatePerson = (time) => {
    let age = prompt("¿cuales es tú edad?");
    if (age > 18){
        if (time >= 2 && time < 7 && !free){
            alert ("Guaa! Tú Pasas Gratias")
            free = true;
        } else {
            document.write("pase ud buen hombre Pero paga el cover");
        }

    } else {
        document.write("no se admiten menores");
    }
}


validatePerson(12);
validatePerson(23);
validatePerson(18);
validatePerson();
