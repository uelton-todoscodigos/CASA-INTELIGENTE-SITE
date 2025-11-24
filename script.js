// configurando o broker MQTT pata o navegador 
const MQTT_URL = "wss://test.mosquitto.org:8081";

const clientId = 'web-casa-inteligente-uelton';

const cliente = mqtt.connect(MQTT_URL, {
    clientId, 
    clearInterval: true, 
    connecTimeout: 4000,

});

//### chamada uma envento do js do tipo  "DMcontentloaded" quq Eo vento que acontece
//  apos toda a minha pagina de HTML ser carregada

document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso ✅🏌️!... Conectado ao Mosquitto");


      // ### Estabecendo a conexão com broker mqtt
    cliente.on("connect", () =>{
        console.log("conexão estabelecida com sucesso ✅🏌️!")
        console.log ("Cliente conectado: ", clientId);

         //### criando um topico de erro casao algo aconteça 
        const topicoTeste  = 'teste/uelton';

        cliente.subscribe(topicoTeste);
    });


  //### preparando mensagem de erro casa aolgo aconteça
    cliente.on("error", (erro) => {
        console.error("Erro ao conectar ao Broker MQTT 🔞 !")
    });

    cliente.on("message", (topico, mensagem) =>{
        console.log("Topico recebido:", topico);
        console.log("Mensagem recebida:", mensagem);
    });
});