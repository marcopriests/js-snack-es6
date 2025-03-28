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


//SNACK 2 ------------------------------------------------------------------------

//creo l'array di ogetti
const clubs = [
    {
        nome: "ATALANTA",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "BOLOGNA",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "CAGLIARI",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "COMO",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "EMPOLI",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "FIORENTINA",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "GENOA",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "HELLAS VERONA",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "INTER",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "JUVENTUS",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "LAZIO",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "LECCE",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "MILAN",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "MONZA",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "NAPOLI",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "PARMA",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "ROMA",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "TORINO",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "UDINESE",
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: "VENEZIA",
        puntiFatti: 0,
        falliSubiti: 0
    },
]

//creo una funzione che mi generi numeri casuali tra 0 e 90
const randomNum = (min, max) => Math.floor(Math.random() * 91)

//creo un for per andare ad assegnare numeri randomici ai valori di punti fatti e falli subiti
for (let i = 0; i < clubs.length; i++) {

    clubs[i].puntiFatti = randomNum()
    clubs[i].falliSubiti = randomNum()
    
}

//creo un nuovo array
const newClubs = []

//pusho nel nuovo array nuovi ogetti contenenti solo nome e falliSubiti
for (let i = 0; i < clubs.length; i++) {

    const {nome, falliSubiti} = clubs[i]

    newClubs.push({nome, falliSubiti})   
    
}

console.log(clubs)
console.log(newClubs)