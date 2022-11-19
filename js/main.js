const BTNPLAY=document.getElementById("play");
const GIOCO = document.getElementById("gioco");
const RISPOSTE = document.getElementById("risposte");
const DIVTASTOCONFERME = document.getElementById("tastoconferma")
// label dei 5 numeri
BTNPLAY.addEventListener("click", 
function(){
    let ARRAYNUMERI=generaArrayNrRandom(5,1,100);
    console.log("Verrai bannato perchè stai usando trucchi: " + ARRAYNUMERI);
    GIOCO.innerHTML = "";
    RISPOSTE.innerHTML = "";
    BTNPLAY.classList.add("disabled")
    for ( let i = 0 ; i < ARRAYNUMERI.length ; i++){
        let box= document.createElement("div");
        randomColor(box);
        GIOCO.append(box);
        box.classList.add("col-12");
        
        box.classList.add(`box-${i}`)
        box.classList.add("boxNr")
        box.innerHTML += `${ARRAYNUMERI[i]}`
    }
    let tempo = 2;
    let timer = setInterval(function(){
    document.getElementById("timerOutput").innerHTML=`${tempo}` 
        if (tempo === 0){
            clearInterval(timer)
            GIOCO.classList.add("d-none")
            RISPOSTE.classList.remove("d-none")
            document.getElementById("timerOutput").classList.add("d-none")
            // Alla fine del conteggio inserisci la classe none per bloccare animazione

            for ( let b = 1 ; b < ARRAYNUMERI.length + 1 ; b++){
                RISPOSTE.innerHTML+=`
                        <div class="col-12 col-lg-2">
                            <div class="form-outline">
                                <input type="number" min="1" max="100" id="nr-${b}" class="form-control" />
                                <label class="form-label" for="form12">Inserisci il numero ${b}</label>
                            </div>
                        </div>
                        `
            }
            DIVTASTOCONFERME.innerHTML+=`<button type="button" class="btn btn-success" id="conferma">Conferma</button>`
            const TASTOCONFERMA = document.getElementById("conferma");
            TASTOCONFERMA.addEventListener("click",
            function() {
                let numeroUno = parseInt(document.getElementById("nr-1").value);
                let numeroDue = parseInt(document.getElementById("nr-2").value);
                let numeroTre = parseInt(document.getElementById("nr-3").value);
                let numeroQuattro = parseInt(document.getElementById("nr-4").value);
                let numeroCinque = parseInt(document.getElementById("nr-5").value);
                let arrUtente=[numeroUno,numeroDue,numeroTre,numeroQuattro,numeroCinque]
                console.log(arrUtente);
                let numeriComune = ARRAYNUMERI.filter(x => arrUtente.includes(x));
                
                document.querySelector("main").innerHTML=""
                let risultatoFinale= document.createElement("div");
                    randomColor(risultatoFinale);
                    document.querySelector("main").append(risultatoFinale);
                    risultatoFinale.classList.add("col-12");
                    risultatoFinale.classList.add("outputFinale");
                    risultatoFinale.innerHTML=`<span> Hai indovinato ${numeriComune.length} numeri. Questi sono i numeri che hai indovinato ${numeriComune}</span>`
                risultatoFinale.innerHTML+=`<button type="button" class="btn btn-danger" id="giocaancora">Gioca ancora</button>`
                // document.getElementById("giocaancora").addEventListener("click", location.reload())

// DA VEDERE TASTO GIOCA ANCORA

            })
        }
        else{
            tempo--
        }
    }, 1000)
})

