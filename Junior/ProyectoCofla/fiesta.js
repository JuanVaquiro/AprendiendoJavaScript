let free = false;

const validatePerson = (time) => {
    let age = prompt("¿cuales es tú edad?");
    if (age >= 18){
        if (time >= 2 && time < 7 && !free){
            alert ("Guaa! Tú Pasas Gratias")
            free = true;
            document.write(`Gratis ${time}:00hs <br> `);
        } else {
            document.write(`son las ${time}:00hs paga la entrada <br>   `);
        }

    } else {
        document.write("no se admiten menores <br>");
    }
}


validatePerson(12);
validatePerson(23);
validatePerson(2);
validatePerson(18);
validatePerson(0.2);
validatePerson(2);  
