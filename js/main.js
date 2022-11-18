
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

const ARRAYNUMERI=generaArrayNrRandom(5,1,100)
console.log(ARRAYNUMERI);