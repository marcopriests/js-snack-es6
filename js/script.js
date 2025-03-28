//SNACK 1 ----------------------------------------------------------------

//creo l'array di oggetti
const bikes = [
    {
        name: "Triban RC 520 Microshift 10v",
        weight: 10.4
    },
    {
        name: "Triban RC 120",
        weight: 11.25
    },
    {
        name: "Van Rysel NCR CF Sram Rival AXS ETAP 12v",
        weight: 8.6
    },
    {
        name: "Van Rysel Gravel Discovery Acolyte 8v",
        weight: 11.5
    },

]

//creo una variabile a cui assegno il valore del peso della prima bici, mi serve per andarci a salvare man mano che ciclo le bici, quella col peso minore
let lightBike = bikes[0]

//creo il for per verificare quale bici pesa meno
for (let i = 0; i < bikes.length; i++) {
    
    //effettuo un controllo per comparare il peso di ogni bici con quello salvato dentro la variabile lightBike
    if (lightBike.weight > bikes[i].weight) {
        lightBike = bikes[i]
    }

    
}

console.log("La bici più leggera è la " + lightBike.name + " che pesa soltanto " + lightBike.weight + "kg!!!")


