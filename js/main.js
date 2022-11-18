
// Visualizzare in pagina 5 numeri casuali.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli :
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.
// *fate sempre una cosa alla volta (in quel caso se partite con i prompt potrebbe incasinarsi nelle tempistiche di aggiornamento dom e visualizzazione del prompt stesso [soprattutto in chrome]).
// Buon divertimento e buon we! :videogioco:


const BTNPLAY=document.getElementById("play");
const GIOCO = document.getElementById("gioco")
// label dei 5 numeri
BTNPLAY.addEventListener("click", 
function(){
    let ARRAYNUMERI=generaArrayNrRandom(5,1,100);
    console.log(ARRAYNUMERI);
    GIOCO.innerHTML = "";
    for ( let i = 0 ; i < ARRAYNUMERI.length ; i++){
        let box= document.createElement("div");
        GIOCO.append(box);
        box.classList.add("col-2");
        box.classList.add("boxNr")
        box.innerHTML += `${ARRAYNUMERI[i]}`
    }
    let tempo = 3;
    let timer = setInterval(function(){

        console.log(tempo);
        if (tempo === 0){
            clearInterval(timer)
        }
        else{
            tempo--
        }
    }, 1000)
})
