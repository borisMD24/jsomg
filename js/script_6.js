function bot(){
    while(true){
        let message = window.prompt("que veux-tu dire a cet ado debile?");
        if(message[message.length-1] == "?"){
            alert("Ouais Ouais...")
        }else if(message != '' && message == message.toUpperCase()){
            alert("Pwa, calme-toi...")
        } else if(message.toLocaleUpperCase().includes("FORTNITE")){
            alert("on s' fait une partie soum-soum ?" )
        } else if(message == ''){
            alert("t'es en PLS ?")
        } else{
            alert( "balek.")
        }
    }
}