const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//gioco tris solo da terminale
let giocatore = "X";
let tris = [
    ' ', ' ', ' ',
    ' ', ' ', ' ',
    ' ', ' ', ' '
];

const defaultgiocatore = () => {
    rl.question("Vuoi cambiare segno? Y per sì, N per no.", function (defaultOrChoose) {
        let scelta = defaultOrChoose.toLowerCase();
        if (scelta == 'y') {
            setgiocatore();
        } else if (scelta === 'n') {
            console.log("Inizia il giocatore con X");
            printTabella();
            playTris();

        } else {
            defaultgiocatore();
        }


    });

}

const setgiocatore = () => {

    rl.question("Inizia il giocatore con X...se vuoi cambiare premi O? ", function (whichgiocatore) {

        changegiocatore(whichgiocatore);
    });

}

const changegiocatore = (giocatoreChange) => {

    let mov = giocatoreChange.toUpperCase();

    if (mov === 'O' || mov === 'X') {
        console.log("Il giocatore che inizia è quello con "+ mov);
        giocatore = mov;
        printTabella();
        playTris();
    } else {
        setgiocatore();
    }

}

const playTris = () => {
    let continePlay = false;
    for (i = 0; i < tris.length; i++) {
        if (tris[i] === ' ') {
            continePlay = true;
        }
    }

    if (continePlay === true) {
        rl.question("Numero della casella dove vuoi mettere il segno:   ", function (movve) {
            gamegiocatore(movve)
        });

    }
};

const gamegiocatore = (move) => {

    let moveToCheck = parseInt(move) - 1;
    let i;
    for (i = 0; i < tris.length; i++) {

        if (moveToCheck == i && tris[i] === ' ') {

            tris[i] = giocatore;
            if (giocatore === 'X') {
                giocatore = 'O';
            } else if (giocatore === 'O') {
                giocatore = 'X'
            }


        } else {
            playTris();
        }
    }

    console.log('\n');
    printTabella();
    const winner = calculateWinner();
    if (winner != ' ') {
        console.log(`Winner is ${winner}`)
        process.exit(0);
    }
    playTris();

}

const calculateWinner = () => {

    if (tris[0] == tris[1] && tris[0] == tris[2]) {
        return tris[0];

    } else if (tris[3] == tris[4] && tris[3] == tris[5]) {
        return tris[3];

    } else if (tris[6] == tris[7] && tris[6] == tris[8]) {
        return tris[6];

    } else if (tris[0] == tris[3] && tris[0] == tris[6]) {
        return tris[0];

    } else if (tris[1] == tris[4] && tris[1] == tris[7]) {
        return tris[1];

    } else if (tris[2] == tris[5] && tris[2] == tris[8]) {
        return winner = tris[2];

    } else if (tris[0] == tris[4] && tris[0] == tris[8]) {
        return tris[0];
    } else if (tris[2] == tris[4] && tris[2] == tris[6]) {
        return tris[2];
    }

    return ' ';
}


const printTabella = () => {

    let line = "";
    for (let i = 1; i < 10; i++) {
        line += tris[i - 1] + ' | ';

        if (i % 3 === 0) {
            console.log(line);
            console.log('____________')
            line = "";
        }

    }
}
printTabella();
defaultgiocatore();
