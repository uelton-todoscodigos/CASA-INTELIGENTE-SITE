// configurando o broker MQTT pata o navegador 
const MQTT_URL = "wss://test.mosquitto.org:8081";

const clientId = 'web-casa-inteligente-uelton';

// const cliente = mqtt.connect(MQTT_URL, {
//     clientId, 
//     clearInterval: true, 
//     connecTimeout: 4000,

// });


const lampaSalaInput = document.getElementById("lamp-sala");

const lampaSalaTexto = document.getElementById("lamp-sala-texto");


lampaSalaInput.addEventListener("change" , () => {

const ligado = lampaSalaInput.checked === true;

if (ligado === true){
    console.log("lampada ligada");
    lampaSalaTexto.innerHTML = "Ligado";

}

else{
    console.log("lamapa desligada");
    lampaSalaTexto.innerHTML = "Desligado";
}



});




const cortinaSalaInput = document.getElementById("cort-sala");
const cortinaSalaTexto = document.getElementById("cort-sala-texto");

cortinaSalaInput.addEventListener("change", () => {

    const fechada = cortinaSalaInput.checked === true;

    if (fechada) {
        console.log("fechada");
        cortinaSalaTexto.innerHTML = "Fechada";
    } 
    
    else {
        console.log("aberta");
        cortinaSalaTexto.innerHTML = "Aberta";
    }

});




const portaSalaInput = document.getElementById("porta-sala"); 
const portaSalaTexto = document.getElementById("porta-sala-texto");

portaSalaInput.addEventListener("change", () => {

    const fechada = portaSalaInput.checked === true;

    if (fechada) {
        console.log("fechada");
        portaSalaTexto.innerHTML = "Fechada";
    } else {
        console.log("aberta");
        portaSalaTexto.innerHTML = "Aberta";
    }

});



//### chamada uma envento do js do tipo  "DMcontentloaded" quq Eo vento que acontece
//  apos toda a minha pagina de HTML ser carregada

// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Página carregada com sucesso ✅🏌️!... Conectado ao Mosquitto");


//       // ### Estabecendo a conexão com broker mqtt
//     cliente.on("connect", () =>{
//         console.log("conexão estabelecida com sucesso ✅🏌️!")
//         console.log ("Cliente conectado: ", clientId);

//          //### criando um topico de erro casao algo aconteça 
//         const topicoTeste  = 'teste/uelton';

//         cliente.subscribe(topicoTeste);
//     });


//   //### preparando mensagem de erro casa aolgo aconteça
//     cliente.on("error", (erro) => {
//         console.error("Erro ao conectar ao Broker MQTT 🔞 !")
//     });

//     cliente.on("message", (topico, mensagem) =>{
//         console.log("Topico recebido:", topico);
//         console.log("Mensagem recebida:", mensagem);
//     });
// });