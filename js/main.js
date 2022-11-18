const BTNPLAY=document.getElementById("play");
const GIOCO = document.getElementById("gioco");
const RISPOSTE = document.getElementById("risposte");
const DIVTASTOCONFERME = document.getElementById("tastoconferma")
// label dei 5 numeri
BTNPLAY.addEventListener("click", 
function(){
    let ARRAYNUMERI=generaArrayNrRandom(5,1,100);
    console.log(ARRAYNUMERI);
    GIOCO.innerHTML = "";
    RISPOSTE.innerHTML = "";
    for ( let i = 0 ; i < ARRAYNUMERI.length ; i++){
        let box= document.createElement("div");
        GIOCO.append(box);
        box.classList.add("col-2");
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
            for ( let b = 1 ; b < ARRAYNUMERI.length + 1 ; b++){
                RISPOSTE.innerHTML+=`
                        <div class="col-2">
                            <div class="form-outline">
                                <input type="number" min="1" max="100" id="nr-${b}" class="form-control" />
                                <label class="form-label" for="form12">Inserisci il numero ${b}</label>
                            </div>
                        </div>
                        `
            }
            DIVTASTOCONFERME.innerHTML+=`<br> <button type="button" class="btn btn-success" id="conferma">Conferma</button>`
            const TASTOCONFERMA = document.getElementById("conferma");
            TASTOCONFERMA.addEventListener("click",
            function() {
                alert("asdasd")
            })
        }
        else{
            tempo--
        }
    }, 1000)
})

