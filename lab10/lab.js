//Lab.JS - 
//Requirements: jQuery must be loaded for this script to work
//Author: Litzy M. Franyutti 
//Date: May 15, 2025


function generateRandomText() {
    const text="Ninguno hecho aquellos puede era a el más, usar muy un cosa después alrededor usar venir. Ser ellos su ser cosa querer eso hacer uno. Entre, tiempo a mi hacer tiene día ir otro ver él tiempo ahí cada, sobre no quién, es. Mucho, de nuevo poco muy ser tener, él, podría ambos. Un cosa dos sobre antes no sobre ir, más voluntad hombre. Podría el, mi debajo, ninguno mismo aquellos su otro que quién gente decir ser. En ir, para, en, él tiempo como otro hecho tú debajo como debajo Nuestro dar ser saber hacer eso de, alrededor dos estos. Hombre algunos ella tener uno pensar, obtener, que decir siempre muy fuera tú, ellos su esto, nosotros. Sobre a arriba ver, cuál que, otro, sobre tenía en a ahí después tiene tú su. El más aquellos esto su ahora nuevo, cuál más porque justo él esto tiempo en ellos tiempo, ella.Mucho con mismo cuándo, sobre cada, cómo, algunos parte pero mirar, el más, hacer estos entonces. Parte querer parte, después pero uno entre, dar aquí entre. Mucho mismo arriba tiempo solo dos mucho entonces ahora. Cuál otro, fin justo cosa sobre hecho quién justo con su parte aquellos, él entre nosotros ser fue."
    const min=3;
    const max=100;
    const randLen=Math.floor(Math.random()*(max-min+1))+min;

    //Get a random starting index to slice the Lorem Ipsum text
    const randStart = Math. floor(Math.random()*(text.length-randLen+1));

    //Generate the random Lorem Ipsum-like text 
    return text.slice(randStart, randStart + randLen);
}

//click listener for your button
$("#make-convo").click(function(){

//get new fake dialogue
const newText = generateRandomText();

//append a new div to our output div 
$("#output").append('<div class="text"><p>' + newText + '</p></div>');
});

